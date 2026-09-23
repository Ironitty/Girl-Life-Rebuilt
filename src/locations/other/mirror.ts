import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

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
      ((s as any).serv = (s as any).serv ?? {})['hairbrush'] = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: xgt /u0027mirror/u0027, /u0027brush/u0027 */ return s; }); return false;"><img src="images/system/icons/action/hairbrush.png"></a>';
    } else {
      if (((s as any).pcs_hairlng ?? 0) > 80  &&  (!((s as any).hbraids ?? 0))) {
        if (((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
          ((s as any).serv = (s as any).serv ?? {})['ponytail'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.hscrunchw = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;"><img src="images/system/icons/action/scrunchy.png"></a>';
          ((s as any).serv = (s as any).serv ?? {})['ponytail desc'] = 'As you have a scrunchy, you can arrange your hair into a <a href="#" onclick="window.__gameStore.setState((s) => { s.hscrunchw = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">ponytail</a>. You have <b>' + ((s as any).mc_inventory ?? 0)?.['scrunchies'] + '</b> scrunchies left.';
        }
        if (((s as any).pcs_hairlng ?? 0) <= 400  &&  ((s as any).mc_inventory ?? 0)?.['kirbygrips'] >= 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
          ((s as any).serv = (s as any).serv ?? {})['bun'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.hpingripw = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;"><img src="images/system/icons/action/clips_pins_grips.png"></a>';
          ((s as any).serv = (s as any).serv ?? {})['bun desc'] = 'You have several clips, pins and grips for you hair. Hence, you can <a href="#" onclick="window.__gameStore.setState((s) => { s.hpingripw = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">updo your hair</a>. You have <b>' + ((s as any).mc_inventory ?? 0)?.['kirbygrips'] + '</b> hair accessories at your disposal.';
        }
        if (((s as any).pcs_hairlng ?? 0) <= 800  &&  ((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 1) {
          if (((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 2  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
            ((s as any).serv = (s as any).serv ?? {})['pigtails'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.hpigtail = s.1; s.hscrunchw = s.2; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;"><img src="images/system/icons/action/hair_ties.png"></a>';
            ((s as any).serv = (s as any).serv ?? {})['pigtails desc'] = 'You can use two hair ties to make yourself some <a href="#" onclick="window.__gameStore.setState((s) => { s.hpigtail = s.1; s.hscrunchw = s.2; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">pigtails</a>.';
          }
          if (((s as any).canBraidHair ?? 0) === 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) + ((s as any).hpigtail ?? 0) === 0) {
            ((s as any).serv = (s as any).serv ?? {})['braid'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=pcs_hairlng/10; s.hbraids = s.15; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;"><img src="images/system/icons/action/braiding.png"></a>';
            ((s as any).serv = (s as any).serv ?? {})['braid desc'] = 'You can spend ' + ((s as any).pcs_hairlng ?? 0)/10 + ' minutes <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=pcs_hairlng/10; s.hbraids = s.15; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">braiding</a> your hair, just the way your sister taught you.';
          }
        }
      }
    }
    if (((s as any).hscrunchw ?? 0) === 1) {
      ((s as any).serv = (s as any).serv ?? {})['ponytail'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.hscrunchw = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;"><img src="images/system/icons/action/ponytail.png"></a>';
      ((s as any).serv = (s as any).serv ?? {})['ponytail desc'] = 'Remove the <a href="#" onclick="window.__gameStore.setState((s) => { s.hscrunchw = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">scrunchie</a> to get rid of the ponytail.';
    }
    if (((s as any).hscrunchw ?? 0) === 2) {
      ((s as any).serv = (s as any).serv ?? {})['pigtails'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.hpigtail = s.0; s.hscrunchw = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;"><img src="images/system/icons/action/pigtails.png"></a>';
      ((s as any).serv = (s as any).serv ?? {})['pigtails desc'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.hpigtail = s.0; s.hscrunchw = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">Remove</a> your scrunchies and let your hair flow free again.';
    }
    if (((s as any).hpingripw ?? 0) === 1) {
      ((s as any).serv = (s as any).serv ?? {})['bun'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.hpingripw = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;"><img src="images/system/icons/action/bun.png"></a>';
      ((s as any).serv = (s as any).serv ?? {})['bun desc'] = 'Let your hair <a href="#" onclick="window.__gameStore.setState((s) => { s.hpingripw = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">flow free</a>.';
    }
    if (((s as any).hbraids ?? 0) > 0) {
      ((s as any).serv = (s as any).serv ?? {})['braid'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=hbraids*2+pcs_hairlng/50; s.hbraids = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;"><img src="images/system/icons/action/braid.png"></a>';
      ((s as any).serv = (s as any).serv ?? {})['braid desc'] = 'Take ' + ((s as any).hbraids ?? 0)*2+((s as any).pcs_hairlng ?? 0)/50 + ' minutes removing your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=hbraids*2+pcs_hairlng/50; s.hbraids = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">braid</a>.';
    }
    ((s as any).serv = (s as any).serv ?? {})['back'] = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027fin/u0027); return false;"><img src="images/system/icons/action/back.png"></a>';
    if (((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0  &&  ((s as any).pcs_lipbalm ?? 0) <= 0) {
      ((s as any).serv = (s as any).serv ?? {})['lipbalm'] = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: cla */ /* TODO-QSP: act /u0027View results/u0027:gt /u0027mirror/u0027, /u0027start/u0027 */ return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027applyLipbalm/u0027); return false;"><img src="images/system/icons/action/lipbalm.png"></a>';
    }
    if (((s as any).mc_inventory ?? 0)?.['eyelash_fake'] > 0  &&  ((s as any).pcs_lashes ?? 0) < 3  &&  ((s as any).lashextensionstyle ?? 0) <= 0) {
      ((s as any).serv = (s as any).serv ?? {})['falselashes'] = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: cla */ /* TODO-QSP: act /u0027View results/u0027:gt /u0027mirror/u0027, /u0027start/u0027 */ return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027applyLashesplain/u0027); return false;"><img src="images/system/icons/action/falselashes.png"></a>';
    }
    if (((s as any).mc_inventory ?? 0)?.['eyelash_mink'] > 0  &&  ((s as any).pcs_lashes ?? 0) < 4  &&  ((s as any).lashextensionstyle ?? 0) <= 0) {
      ((s as any).serv = (s as any).serv ?? {})['minklashes'] = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: cla */ /* TODO-QSP: act /u0027View results/u0027:gt /u0027mirror/u0027, /u0027start/u0027 */ return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027applyLashesmink/u0027); return false;"><img src="images/system/icons/action/minklashes.png"></a>';
    }
    if (((s as any).pcs_makeup ?? 0) === ((s as any).makeup ?? 0)?.['base']  &&  ((s as any).mc_inventory ?? 0)?.['cosmetics'] > 0) {
      (s as any).minut = ((s as any).minut ?? 0) + 3;
      // TODO-QSP: "
      ((s as any).serv = (s as any).serv ?? {})['makeup'] = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $serv4 */ return s; }); return false;"><img src="images/system/icons/action/makeup.png"></a>';
    }
    // TODO-QSP: dynamic text: <center><table align=center cellspacing=0 cellpadding=0><tr><td align=center col...
    scene.text(`<center><table align=center cellspacing=0 cellpadding=0><tr><td align=center colspan=15>${((s as any).serv ?? 0)?.['avatar'] ?? ''}</td></tr><tr><td colspan=15><hr></td></tr><tr><td align=center>${((s as any).serv ?? 0)?.['falselashes'] ?? ''}</td>  <td align=center>${((s as any).serv ?? 0)?.['minklashes'] ?? ''}</td><td align=center>${((s as any).serv ?? 0)?.['lipbalm'] ?? ''}</td><td align=center>${((s as any).serv ?? 0)?.['makeup'] ?? ''}</td><td align=center>${((s as any).serv ?? 0)?.['ponytail'] ?? ''}</td><td align=center>${((s as any).serv ?? 0)?.['bun'] ?? ''}</td><td align=center>${((s as any).serv ?? 0)?.['pigtails'] ?? ''}</td><td align=center>${((s as any).serv ?? 0)?.['braid'] ?? ''}</td><td align=center>${((s as any).serv ?? 0)?.['hairbrush'] ?? ''}</td><td align=center>${((s as any).serv ?? 0)?.['back'] ?? ''}</td></tr></table></center>`);
    if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 9) {
        scene.text('In the mirror, you see a strange woman\'s face looking back at you that exactly copies all your actions. You can hardly accept the idea that this is now you.');
      } else {
        if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 29) {
          scene.text('In the mirror you see a woman\'s face to which you have become accustomed to. But sometimes, you get the feel that this is not your face.');
        }
      }
    }
    // TODO-QSP: dynamic text: <<$pcs_apprnc_text>>
    scene.text(`${((s as any).pcs_apprnc_text ?? '')}`);
    // TODO-QSP: dynamic text: <<$hair>>
    scene.text(`${((s as any).hair ?? '')}`);
    // TODO-QSP: dynamic text: '<<$pc_descFull[''makeup'']>>. You have ' + iif(pcs_eyesize > 1, '<<$pc_desc[''e...
    scene.text(`${((s as any).pc_descFull ?? 0)?.['makeup'] ?? ''}. You have ` + ((((s as any).pcs_eyesize ?? 0) > 1) ? ('' + ((s as any).pc_desc ?? 0)?.['eye size'] ?? '' + ' ') : ('')) + `${((s as any).pc_desc ?? 0)?.['eye colour'] ?? ''} eyes ${((s as any).pcs_lashes_txt ?? '')}.`);
    if (((s as any).glass ?? 0) > 0) {
      // TODO-QSP: dynamic text: You are wearing <<$pc_descWordy[''vision'']>>.
      scene.text(`You are wearing ${((s as any).pc_descWordy ?? 0)?.['vision'] ?? ''}.`);
    }
    // TODO-QSP: $pcs_teeth_txt
    // TODO-QSP: dynamic text: <<$pc_descFull[''skin'']>>
    scene.text(`${((s as any).pc_descFull ?? 0)?.['skin'] ?? ''}`);
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
      // TODO-QSP: dynamic text: <<$serv["hhair"]>>
      scene.text(`${((s as any).serv ?? 0)?.['hhair'] ?? ''}`);
    }
    if (((s as any).serv ?? 0)?.['hbraids'] !== '') {
      // TODO-QSP: dynamic text: <<$serv["hbraids"]>>
      scene.text(`${((s as any).serv ?? 0)?.['hbraids'] ?? ''}`);
    }
    if (((s as any).serv ?? 0)?.['hdye'] !== '') {
      // TODO-QSP: dynamic text: <<$serv["hdye"]>>
      scene.text(`${((s as any).serv ?? 0)?.['hdye'] ?? ''}`);
    }
    if (((s as any).serv ?? 0)?.['ponytail desc'] !== '') {
      // TODO-QSP: dynamic text: <<$serv["ponytail desc"]>>
      scene.text(`${((s as any).serv ?? 0)?.['ponytail desc'] ?? ''}`);
    }
    if (((s as any).serv ?? 0)?.['bun desc'] !== '') {
      // TODO-QSP: dynamic text: <<$serv["bun desc"]>>
      scene.text(`${((s as any).serv ?? 0)?.['bun desc'] ?? ''}`);
    }
    if (((s as any).serv ?? 0)?.['pigtails desc'] !== '') {
      // TODO-QSP: dynamic text: <<$serv["pigtails desc"]>>
      scene.text(`${((s as any).serv ?? 0)?.['pigtails desc'] ?? ''}`);
    }
    if (((s as any).serv ?? 0)?.['braid desc'] !== '') {
      // TODO-QSP: dynamic text: <<$serv["braid desc"]>>
      scene.text(`${((s as any).serv ?? 0)?.['braid desc'] ?? ''}`);
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
    // TODO-QSP: dynamic text: <<$pcs_apprnc_text>>
    scene.text(`${((s as any).pcs_apprnc_text ?? '')}`);
    // TODO-QSP: dynamic text: <<$hair>>
    scene.text(`${((s as any).hair ?? '')}`);
    // TODO-QSP: dynamic text: '<<$pc_descFull[''makeup'']>>. Your ' + iif(pcs_eyesize > 1, '<<$pc_desc[''eye s...
    scene.text(`${((s as any).pc_descFull ?? 0)?.['makeup'] ?? ''}. Your ` + ((((s as any).pcs_eyesize ?? 0) > 1) ? ('' + ((s as any).pc_desc ?? 0)?.['eye size'] ?? '' + ' ') : ('')) + `eyes are ${((s as any).pc_desc ?? 0)?.['eye colour'] ?? ''} ${((s as any).pcs_lashes_txt ?? '')}.`);
    if (((s as any).glass ?? 0) > 0) {
      // TODO-QSP: dynamic text: You are wearing <<$pc_descWordy[''vision'']>>.
      scene.text(`You are wearing ${((s as any).pc_descWordy ?? 0)?.['vision'] ?? ''}.`);
    }
    // TODO-QSP: dynamic text: You have <<$pcs_lipbalm_str>> <<$pc_desc[''lip size'']>> lips.
    scene.text(`You have ${((s as any).pcs_lipbalm_str ?? '')} ${((s as any).pc_desc ?? 0)?.['lip size'] ?? ''} lips.`);
    // TODO-QSP: $pcs_teeth_txt
    // TODO-QSP: dynamic text: <<$pc_descFull[''skin'']>>
    scene.text(`${((s as any).pc_descFull ?? 0)?.['skin'] ?? ''}`);
    if (((s as any).curly ?? 0) > 0  &&  (!((s as any).defcurly ?? 0))) {
      // TODO-QSP: dynamic text: <br>Your curly hair will last for another <<curly>> days.
      scene.text(`<br>Your curly hair will last for another ${((s as any).curly ?? '')} days.`);
    }
    if (((s as any).straight ?? 0) > 0  &&  ((s as any).defcurly ?? 0) === 1) {
      // TODO-QSP: dynamic text: <br>Your straightened hair will last for another <<straight>> days.
      scene.text(`<br>Your straightened hair will last for another ${((s as any).straight ?? '')} days.`);
    }
    if (((s as any).hbraids ?? 0) > 0) {
      // TODO-QSP: dynamic text: <br>Your braided hair will last for another <<hbraids>> days.
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
        // TODO-QSP: dynamic text: As you have a scrunchy, you can arrange your hair into a <a href="exec:hscrunchw...
        scene.text(`As you have a scrunchy, you can arrange your hair into a <a href="#" onclick="window.__gameStore.setState((s) => { s.hscrunchw = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">ponytail</a>. You have ${((s as any).mc_inventory ?? 0)?.['scrunchies'] ?? ''} scrunchies left.`);
      }
      if (((s as any).pcs_hairlng ?? 0) <= 400  &&  ((s as any).mc_inventory ?? 0)?.['kirbygrips'] >= 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
        // TODO-QSP: dynamic text: You have several clips, pins and grips for you hair. Hence, you can <a href="exe...
        scene.text(`You have several clips, pins and grips for you hair. Hence, you can <a href="#" onclick="window.__gameStore.setState((s) => { s.hpingripw = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">updo your hair</a>. You have ${((s as any).mc_inventory ?? 0)?.['kirbygrips'] ?? ''} hair accessories at your disposal.`);
      }
      if (((s as any).pcs_hairlng ?? 0) <= 800  &&  ((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 1) {
        if (((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 2  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
          scene.text('You can use two hair ties to make yourself some <a href="#" onclick="window.__gameStore.setState((s) => { s.hpigtail = s.1; s.hscrunchw = s.2; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">pigtails</a>.');
        }
        if (((s as any).canBraidHair ?? 0) === 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) + ((s as any).hpigtail ?? 0) === 0) {
          // TODO-QSP: dynamic text: You can spend <<pcs_hairlng/10>> minutes <a href="exec:minut += pcs_hairlng/10 &...
          scene.text(`You can spend ${((s as any).pcs_hairlng ?? '')/10} minutes <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=pcs_hairlng/10; s.hbraids = s.15; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">braiding</a> your hair, just the way your sister taught you.`);
        }
      }
    }
    if (((s as any).hscrunchw ?? 0) === 1) {
      scene.text('Remove the <a href="#" onclick="window.__gameStore.setState((s) => { s.hscrunchw = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">scrunchie</a> to get rid of the ponytail.');
    }
    if (((s as any).hscrunchw ?? 0) === 2) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.hpigtail = s.0; s.hscrunchw = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">Remove</a> your scrunchies and let your hair flow free again.');
    }
    if (((s as any).hpingripw ?? 0) === 1) {
      scene.text('Let your hair <a href="#" onclick="window.__gameStore.setState((s) => { s.hpingripw = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">flow free</a>.');
    }
    if (((s as any).hbraids ?? 0) > 0) {
      // TODO-QSP: dynamic text: Take <<hbraids*2+pcs_hairlng/50>> minutes removing your <a href="exec:minut += h...
      scene.text(`Take ${((s as any).hbraids ?? '')*2+((s as any).pcs_hairlng ?? '')/50} minutes removing your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=hbraids*2+pcs_hairlng/50; s.hbraids = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">braid</a>.`);
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['cosmetics'] > 0) {
  }
  if (((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0) {
    // TODO-QSP: dynamic text: l ' | Lip gloss: <<mc_inventory[''lipbalm'']>>' else *pl ' You have no lip gloss...
    scene.text(`l ' | Lip gloss: ${((s as any).mc_inventory ?? 0)?.['lipbalm'] ?? ''}' else *pl ' You have no lip gloss left.'`);
  }
  if (((s as any).mc_inventory ?? 0)?.['eyelash_fake'] > 0) {
  }
  if (((s as any).mc_inventory ?? 0)?.['eyelash_mink'] > 0) {
    // TODO-QSP: dynamic text: l ' | Mink lashes: <<mc_inventory[''eyelash_mink'']>>' else *pl ' You have no mi...
    scene.text(`l ' | Mink lashes: ${((s as any).mc_inventory ?? 0)?.['eyelash_mink'] ?? ''}' else *pl ' You have no mink lashes left.'`);
  }
  if (((s as any).mc_inventory ?? 0)?.['umbrella'] === 0) {
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.actions([
      { label: 'Brush your hair', handler: (st: GameState) => {
    // TODO-QSP: xgt 'mirror', 'brush'
  } },
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
    // TODO-QSP: dynamic text: <<$makeupLight>>
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
    // TODO-QSP: dynamic text: <<$makeupNatural>>
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
    // TODO-QSP: dynamic text: <<$makeupHeavy>>
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
    // TODO-QSP: dynamic text: <<$makeupBimbo>>
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
    // TODO-QSP: dynamic text: <<$makeupGoth>>
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
    // TODO-QSP: dynamic text: <<$makeupSmeared>>
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterApplyLipbalm(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'View results', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', 'mirror', 'start');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['eyelash_fake'] > 0  &&  ((s as any).pcs_lashes ?? 0) < 3  &&  ((s as any).lashextensionstyle ?? 0) <= 0) {
    scene.actions([
      { label: 'Apply false lashes', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterApplyLashesplain(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'View results', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', 'mirror', 'start');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['eyelash_mink'] > 0  &&  ((s as any).pcs_lashes ?? 0) < 4  &&  ((s as any).lashextensionstyle ?? 0) <= 0) {
    scene.actions([
      { label: 'Apply mink lashes', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterApplyLashesmink(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'View results', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', 'mirror', 'start');
  } },
    ]);
  } },
    ]);
  }
  (s as any).temp_routine_index = 1;
  (s as any).temp_max_cosmetic_routines = qspFunc(s, 'mirror', 'get_max_cosmetic_routines');
  // TODO-QSP: :makeup_routine_apply_acts_loop
  (s as any).temp_routine_name = ((s as any).makeup ?? 0)?.['routine_' + String(((s as any).temp_routine_index ?? 0)) + '_name'];
  if (((s as any).makeup ?? 0)['routine_' + (((s as any).temp_routine_index ?? 0))] !== '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_routine_index ?? 0)]; enterRoutineDescription(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (qspFunc(s, 'mirror', 'routine_check', ((s as any).temp_routine_index ?? 0))) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Apply ' + String(((s as any).temp_routine_name ?? '') ?? ''), handler: (st: GameState) => {
    qspGoto(st, 'mirror', 'works_routine', '' + ((st as any).temp_routine_index ?? 0) + '');
  } },
      ]);
    }
  }
  (s as any).temp_routine_index = ((s as any).temp_routine_index ?? 0) + (1);
  if (((s as any).temp_routine_index ?? 0) <= ((s as any).temp_max_cosmetic_routines ?? 0)) {
    // TODO-QSP: jump 'makeup_routine_apply_acts_loop'
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away from the mirror', goto: ['mirror', 'fin'] },
    { label: 'Manage your custom make-up routines', handler: (st: GameState) => {
    qspCall(st, 'mirror', 'routine_manage');
  } },
    { label: '', labelFn: (s: GameState) => String(((((s as any).newstylemirror ?? 0)) ? ('Change to the old style mirror') : ('Change to the new style mirror')) ?? ''), handler: (st: GameState) => {
    (st as any).newstylemirror = ((((st as any).newstylemirror ?? 0)) ? (0) : (1));
  }, goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

function enterGetMaxCosmeticRoutines(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 4;
  // TODO-QSP: end
  scene.build();
}

function enterRoutineManage(s: GameState, scene: SceneBuilder): void {
  scene.text('Select make-up level');
  // TODO-QSP: dynamic text: iif(makeupSetting = 0,  ' none,',    '<a href="exec:makeupSetting = 0  & gs ''mi...
  scene.text('iif(makeupSetting = 0,  \' none,\',    \'<a href="#" onclick="window.__gameStore.setState((s) => { s.makeupSetting = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027routine_manage/u0027); return false;">none</a>,\')');
  // TODO-QSP: dynamic text: iif(makeupSetting = 1,  ' light,',    ' <a href="exec:makeupSetting = 1  & gs ''...
  scene.text('iif(makeupSetting = 1,  \' light,\',    \' <a href="#" onclick="window.__gameStore.setState((s) => { s.makeupSetting = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027routine_manage/u0027); return false;">light</a>,\')');
  // TODO-QSP: dynamic text: iif(makeupSetting = 2,  ' vibrant,',  ' <a href="exec:makeupSetting = 2  & gs ''...
  scene.text('iif(makeupSetting = 2,  \' vibrant,\',  \' <a href="#" onclick="window.__gameStore.setState((s) => { s.makeupSetting = s.2; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027routine_manage/u0027); return false;">vibrant</a>,\')');
  // TODO-QSP: dynamic text: iif(makeupSetting = 3,  ' thick,',    ' <a href="exec:makeupSetting = 3  & gs ''...
  scene.text('iif(makeupSetting = 3,  \' thick,\',    \' <a href="#" onclick="window.__gameStore.setState((s) => { s.makeupSetting = s.3; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027routine_manage/u0027); return false;">thick</a>,\')');
  // TODO-QSP: dynamic text: iif(makeupSetting = 4,  ' smeared,',  ' <a href="exec:makeupSetting = 4  & gs ''...
  scene.text('iif(makeupSetting = 4,  \' smeared,\',  \' <a href="#" onclick="window.__gameStore.setState((s) => { s.makeupSetting = s.4; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027routine_manage/u0027); return false;">smeared</a>,\')');
  // TODO-QSP: dynamic text: iif(makeupSetting = 5,  ' bimbo',    ' <a href="exec:makeupSetting = 5  & gs ''m...
  scene.text('iif(makeupSetting = 5,  \' bimbo\',    \' <a href="#" onclick="window.__gameStore.setState((s) => { s.makeupSetting = s.5; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027routine_manage/u0027); return false;">bimbo</a>\')');
  scene.text('Choose if you will use lipbalm');
  // TODO-QSP: dynamic text: iif(cust_lipbalm = 0, 'no,', '<a href="exec:cust_lipbalm = 0 & gs ''mirror'', ''...
  scene.text('iif(cust_lipbalm = 0, \'no,\', \'<a href="#" onclick="window.__gameStore.setState((s) => { s.cust_lipbalm = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027routine_manage/u0027); return false;">no</a>,\')');
  scene.text('Choose lash options');
  // TODO-QSP: dynamic text: iif(custlashes = 0, 'none,', '<a href="exec:custlashes = 0 & gs ''mirror'', ''ro...
  scene.text('iif(custlashes = 0, \'none,\', \'<a href="#" onclick="window.__gameStore.setState((s) => { s.custlashes = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027routine_manage/u0027); return false;">none</a>,\')');
  // TODO-QSP: dynamic text: iif(custlashes = 1, ' fake,', ' <a href="exec:custlashes = 1 & gs ''mirror'', ''...
  scene.text('iif(custlashes = 1, \' fake,\', \' <a href="#" onclick="window.__gameStore.setState((s) => { s.custlashes = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027routine_manage/u0027); return false;">fake</a>,\')');
  (s as any).routine = String(((s as any).makeupSetting ?? 0)) + String(((s as any).cust_lipbalm ?? 0)) + String(((s as any).custlashes ?? 0));
  (s as any).temp_routine_index = 0;
  (s as any).temp_max_cosmetic_routines = qspFunc(s, 'mirror', 'get_max_cosmetic_routines');
  // TODO-QSP: :makeup_routine_save_selector_loop
  (s as any).temp_routine_index = ((s as any).temp_routine_index ?? 0) + (1);
  if (((s as any).temp_routine_index ?? 0) <= ((s as any).temp_max_cosmetic_routines ?? 0)  &&  ((s as any).makeup ?? 0)['routine_' + (((s as any).temp_routine_index ?? 0))] !== '') {
    // TODO-QSP: jump 'makeup_routine_save_selector_loop'
  }
  // TODO-QSP: dynamic "if temp_routine_index <= temp_max_cosmetic_routines:
  // TODO-QSP: end"
  (s as any).temp_routine_index = 1;
  // TODO-QSP: :makeup_routine_manage_acts_loop
  (s as any).temp_routine_name = ((s as any).makeup ?? 0)?.['routine_' + String(((s as any).temp_routine_index ?? 0)) + '_name'];
  // TODO-QSP: dynamic "if $makeup['routine_<<temp_routine_index>>'] ! '':
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_routine_index ?? 0), 'no_color']; enterRoutineDescription(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end"
  (s as any).temp_routine_index = ((s as any).temp_routine_index ?? 0) + (1);
  if (((s as any).temp_routine_index ?? 0) <= ((s as any).temp_max_cosmetic_routines ?? 0)) {
    // TODO-QSP: jump 'makeup_routine_manage_acts_loop'
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit', goto: ['mirror', 'start'] },
    { label: 'Save routine', handler: (st: GameState) => {
    ((st as any).makeup = (st as any).makeup ?? {})['routine_' + String(((st as any).temp_routine_index ?? 0)) + '_makeup'] = ((st as any).makeupSetting ?? 0);
    ((st as any).makeup = (st as any).makeup ?? {})['routine_' + String(((st as any).temp_routine_index ?? 0)) + '_lipbalm'] = ((st as any).cust_lipbalm ?? 0);
    ((st as any).makeup = (st as any).makeup ?? {})['routine_' + String(((st as any).temp_routine_index ?? 0)) + '_lashes'] = ((st as any).custlashes ?? 0);
    ((st as any).makeup = (st as any).makeup ?? {})['routine_' + String(((st as any).temp_routine_index ?? 0))] = ((st as any).routine ?? 0);
    ((st as any).makeup = (st as any).makeup ?? {})['routine_' + String(((st as any).temp_routine_index ?? 0)) + '_name'] = 'routine ' + ((st as any).temp_routine_index ?? 0) + '';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRoutineManage(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '', labelFn: (s: GameState) => String(((s as any).temp_routine_index ?? '') ?? '') + '. Remove ""' + String(((s as any).temp_routine_name ?? '') ?? '') + '""', handler: (st: GameState) => {
    qspCall(st, 'array', 'remove_element', 'makeup', 'routine_' + ((st as any).temp_routine_index ?? 0) + '');
    qspCall(st, 'array', 'remove_element', 'makeup', 'routine_' + ((st as any).temp_routine_index ?? 0) + '_name');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRoutineManage(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '', labelFn: (s: GameState) => String(((s as any).temp_routine_index ?? '') ?? '') + '. Rename ""' + String(((s as any).temp_routine_name ?? '') ?? '') + '""', handler: (st: GameState) => {
    ((st as any).makeup = (st as any).makeup ?? {})['routine_' + String(((st as any).temp_routine_index ?? 0)) + '_name'] = window.prompt("Name the routine") ?? '';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRoutineManage(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterRoutineDescription(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'mirror', 'routine_check', ((s as any).locArgs?.[1] ?? 0))) {
  }
  if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_makeup'] > 0) {
    if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_makeup'] === 4) {
      if (String((s as any).locArgs?.[2] ?? '') === ''  &&  ((s as any).pcs_makeup ?? 0) !== 0) {
        if (((s as any).mc_inventory ?? 0)?.['cosmetics'] >= 3) {
          (s as any).temp_prefix = '<font color="' + ((s as any).theme_hex ?? 0)?.['pos'] + '">';
          (s as any).temp_postfix = ' - Not applied</font>';
        } else {
          (s as any).temp_prefix = '<font color="' + ((s as any).theme_hex ?? 0)?.['neg'] + '">';
          (s as any).temp_postfix = ' - Not enough to apply</font>';
        }
      }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === ''  &&  ((s as any).pcs_makeup ?? 0) < ((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_makeup'] + 1) {
        if (((s as any).mc_inventory ?? 0)?.['cosmetics'] >= Math.min(qspUntranslated(s, "makeup[\u00000\u0000]", { location: "mirror" }), 3)) {
          (s as any).temp_prefix = '<font color="' + ((s as any).theme_hex ?? 0)?.['pos'] + '">';
          (s as any).temp_postfix = ' - Not applied</font>';
        } else {
          (s as any).temp_prefix = '<font color="' + ((s as any).theme_hex ?? 0)?.['neg'] + '">';
          (s as any).temp_postfix = ' - Not enough to apply</font>';
        }
      }
    }
    if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_makeup'] === 1) {
      // TODO-QSP: dynamic text:  <<$temp_prefix>>Light make-up<<$temp_postfix>>
      scene.text(` ${((s as any).temp_prefix ?? '')}Light make-up${((s as any).temp_postfix ?? '')}`);
    } else {
      if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_makeup'] === 2) {
        // TODO-QSP: dynamic text:  <<$temp_prefix>>Vibrant make-up<<$temp_postfix>>
        scene.text(` ${((s as any).temp_prefix ?? '')}Vibrant make-up${((s as any).temp_postfix ?? '')}`);
      } else {
        if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_makeup'] === 3) {
          // TODO-QSP: dynamic text:  <<$temp_prefix>>Thick make-up<<$temp_postfix>>
          scene.text(` ${((s as any).temp_prefix ?? '')}Thick make-up${((s as any).temp_postfix ?? '')}`);
        } else {
          if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_makeup'] === 4) {
            // TODO-QSP: dynamic text:  <<$temp_prefix>>Smeared make-up<<$temp_postfix>>
            scene.text(` ${((s as any).temp_prefix ?? '')}Smeared make-up${((s as any).temp_postfix ?? '')}`);
          } else {
            if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_makeup'] === 5) {
              // TODO-QSP: dynamic text:  <<$temp_prefix>>Bimbo make-up<<$temp_postfix>>
              scene.text(` ${((s as any).temp_prefix ?? '')}Bimbo make-up${((s as any).temp_postfix ?? '')}`);
            } else {
              if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_makeup'] === 6) {
                // TODO-QSP: dynamic text:  <<$temp_prefix>>Goth make-up<<$temp_postfix>>
                scene.text(` ${((s as any).temp_prefix ?? '')}Goth make-up${((s as any).temp_postfix ?? '')}`);
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_lipbalm'] > 0) {
    if (String((s as any).locArgs?.[2] ?? '') === ''  &&  ((s as any).pcs_lipbalm ?? 0) < ((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_lipbalm']) {
      if (((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0) {
        (s as any).temp_prefix = '<font color="#E5C07B">';
        (s as any).temp_postfix = ' - Not applied</font>';
      } else {
        (s as any).temp_prefix = '<font color="#dc322f">';
        (s as any).temp_postfix = ' - Not enough to apply</font>';
      }
    }
    // TODO-QSP: dynamic text:  <<$temp_prefix>>Lipbalm<<$temp_postfix>>
    scene.text(` ${((s as any).temp_prefix ?? '')}Lipbalm${((s as any).temp_postfix ?? '')}`);
  }
  if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_lashes'] > 0) {
    if (String((s as any).locArgs?.[2] ?? '') === ''  &&  ((s as any).lashextensionstyle ?? 0) <= 0  &&  ((s as any).pcs_lashes ?? 0) < ((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_lashes'] + 2) {
      if ((((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_lashes'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['eyelash_fake'] >= 1)  ||  (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_lashes'] === 2  &&  ((s as any).mc_inventory ?? 0)?.['eyelash_mink'] >= 1)) {
        (s as any).temp_prefix = '<font color="#E5C07B">';
        (s as any).temp_postfix = ' - Not applied</font>';
      } else {
        (s as any).temp_prefix = '<font color="#dc322f">';
        (s as any).temp_postfix = ' - Not enough to apply</font>';
      }
    }
    if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_lashes'] === 1) {
      // TODO-QSP: dynamic text:  <<$temp_prefix>>False lashes<<$temp_postfix>>
      scene.text(` ${((s as any).temp_prefix ?? '')}False lashes${((s as any).temp_postfix ?? '')}`);
    } else {
      if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_lashes'] === 2) {
        // TODO-QSP: dynamic text:  <<$temp_prefix>>Mink false lashes<<$temp_postfix>>
        scene.text(` ${((s as any).temp_prefix ?? '')}Mink false lashes${((s as any).temp_postfix ?? '')}`);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRoutineCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_makeup'] === 4  &&  ((s as any).pcs_makeup ?? 0) !== 0  &&  ((s as any).mc_inventory ?? 0)?.['cosmetics'] >= 3) {
    (s as any).result = 1;
    return;
  }
  if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_makeup'] > 0  &&  ((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_makeup'] !== 4  &&  ((s as any).pcs_makeup ?? 0) < ((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_makeup'] + 1  &&  ((s as any).mc_inventory ?? 0)?.['cosmetics'] >= Math.min(qspUntranslated(s, "makeup[\u00003\u0000]", { location: "mirror" }), 3)) {
    (s as any).result = 1;
    return;
  }
  if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_lipbalm'] > 0  &&  ((s as any).pcs_lipbalm ?? 0) < ((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_lipbalm']  &&  ((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0) {
    (s as any).result = 1;
    return;
  }
  if (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_lashes'] > 0  &&  ((s as any).lashextensionstyle ?? 0) <= 0  &&  ((s as any).pcs_lashes ?? 0) < ((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_lashes'] + 2  &&  ((((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_lashes'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['eyelash_fake'] >= 1)  ||  (((s as any).makeup ?? 0)['routine_' + (String((s as any).locArgs?.[1] ?? '')) + '_lashes'] === 2  &&  ((s as any).mc_inventory ?? 0)?.['eyelash_mink'] >= 1))) {
    (s as any).result = 1;
    return;
  }
  // TODO-QSP: end
  // TODO-QSP: makeup['routine_<<ARGS[1]>>_makeup'] > 0 and
  // TODO-QSP: pcs_makeup < makeup['routine_<<ARGS[1]>>_makeup'] + 1 and
  // TODO-QSP: mc_inventory['cosmetics'] >= min(makeup['routine_<<ARGS[1]>>_makeup'], 3)
  // TODO-QSP: makeup['routine_<<ARGS[1]>>_lipbalm'] > 0 and
  // TODO-QSP: pcs_lipbalm < makeup['routine_<<ARGS[1]>>_lipbalm'] and
  // TODO-QSP: mc_inventory['lipbalm'] > 0
  // TODO-QSP: makeup['routine_<<ARGS[1]>>_lashes'] > 0 and
  // TODO-QSP: lashextensionstyle <= 0 and
  // TODO-QSP: pcs_lashes < makeup['routine_<<ARGS[1]>>_lashes'] + 2 and
  // TODO-QSP: ((
  ((s as any).makeup = (s as any).makeup ?? {})['routine_' + String(((s as any).locArgs?.[1] ?? 0)) + '_lashes'] = 1;
  // TODO-QSP: mc_inventory['eyelash_fake'] >= 1
  // TODO-QSP: ) or (
  ((s as any).makeup = (s as any).makeup ?? {})['routine_' + String(((s as any).locArgs?.[1] ?? 0)) + '_lashes'] = 2;
  // TODO-QSP: mc_inventory['eyelash_mink'] >= 1
  // TODO-QSP: ))
  scene.build();
}

function enterSteam(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bathroom/mirror1.jpg');
  scene.text('<center>The mirror is heavily misted. It must be wiped or left to cool.</center>');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wipe the mirror', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).mirror_steam = (-1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/bathroom/mirror2.jpg');
    scene.text('<center>You wipe the mirror with a towel.</center>');
    scene.actions([
      { label: 'Look in the mirror', goto: ['mirror', 'start'] },
    ]);
  } },
    { label: 'Move away from the mirror', goto: ['mirror', 'fin'] },
  ]);
  scene.build();
}

function enterBrush(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.min(15, Math.max(1, ((s as any).pcs_hairlng ?? 0) / 80)));
  (s as any).pcs_hairbsh = 1;
  if (((s as any).newstylemirror ?? 0) === 1) {
    ((s as any).serv = (s as any).serv ?? {})['noaction'] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="images/system/icons/blank.png">';
    ((s as any).serv = (s as any).serv ?? {})['avatar'] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + qspFunc(s, '$face_image', '') + '">';
    if (((s as any).mirrorloc ?? 0) === 'mirror') {
      ((s as any).serv = (s as any).serv ?? {})['back'] = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;"><img src="images/system/icons/action/back.png"></a>';
    } else {
      ((s as any).serv = (s as any).serv ?? {})['back'] = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027fin/u0027); return false;"><img src="images/system/icons/action/back.png"></a>';
    }
    // TODO-QSP: dynamic text: <center><table align=center cellspacing=0 cellpadding=0><tr><td align=center col...
    scene.text(`<center><table align=center cellspacing=0 cellpadding=0><tr><td align=center colspan=15><center>${((s as any).serv ?? 0)?.['avatar'] ?? ''}</center></td></tr><tr><td colspan=15><hr></td></tr><tr><td colspan=10></td><td>${((s as any).serv ?? 0)?.['back'] ?? ''}</td><td colspan=4></td></tr></table></center>`);
  } else {
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('You brush your hair.');
  }
  if (((s as any).mirrorloc ?? 0) === 'mirror') {
    scene.actions([
      { label: 'Finish', goto: ['mirror', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Finish', goto: ['mirror', 'fin'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWorksRoutine(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'mirror', 'works', 'makeup[\'routine_' + ((s as any).locArgs?.[1] ?? 0) + '_makeup\']', 'makeup[\'routine_' + ((s as any).locArgs?.[1] ?? 0) + '_lipbalm\']');
  // TODO-QSP: end
  scene.build();
}

function enterWorks(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'goth') {
    scene.img('images/pc/activities/makeup_g1.jpg');
  } else {
    if (((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo') {
      scene.img('images/pc/activities/makeup_b1.jpg');
    } else {
      scene.img('images/pc/activities/makeup_1.jpg');
    }
  }
  if ((!((s as any).pcs_makeup ?? 0))) {
    (s as any).pcs_makeup = ((s as any).makeup ?? 0)?.['base'];
  }
  if (String((s as any).locArgs?.[1] ?? '') > 0  &&  ((s as any).pcs_makeup ?? 0) < String((s as any).locArgs?.[1] ?? '') + 1) {
    if (((s as any).mc_inventory ?? 0)?.['cosmetics'] <= 0) {
      scene.text('You don\'t have any cosmetics.');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['cosmetics'] >= Math.min(((s as any).locArgs?.[1] ?? 0), 3)) {
        if (String((s as any).locArgs?.[1] ?? '') === 1  &&  ((s as any).pcs_makeup ?? 0) < 2) {
          scene.text('You subtly apply some neutral tones, with a light application of makeup to bring out your natural beauty.');
          (s as any).minut = ((s as any).minut ?? 0) + 3;
          qspCall(s, 'exp_gain', 'makupskl', (Math.floor(Math.random() * 3) + 1));
          ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).mc_inventory['cosmetics'] ?? 0) - (1);
          (s as any).pcs_makeup = 2;
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 2  &&  ((s as any).pcs_makeup ?? 0) < 3) {
            scene.text('You apply some mildly vibrant tones and colors of makeup to cover your minor imperfections and enhance your best features.');
            (s as any).minut = ((s as any).minut ?? 0) + 5;
            qspCall(s, 'exp_gain', 'makupskl', (Math.floor(Math.random() * 3) + 1));
            ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).mc_inventory['cosmetics'] ?? 0) - (2);
            (s as any).pcs_makeup = 3;
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 3  &&  ((s as any).pcs_makeup ?? 0) < 4) {
              scene.text('You apply some deeper, richer shades of makeup, thick enough to cover most imperfections, while drawing attention to your eyes and lips.');
              (s as any).minut = ((s as any).minut ?? 0) + 10;
              qspCall(s, 'exp_gain', 'makupskl', (Math.floor(Math.random() * 3) + 1));
              ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).mc_inventory['cosmetics'] ?? 0) - (3);
              (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
              (s as any).pcs_makeup = 4;
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 5  &&  ((s as any).pcs_makeup ?? 0) < 6) {
                scene.text('You apply some bright, seductive makeup, thick enough to cover most imperfections, while drawing attention in a way only a bimbo can.');
                (s as any).minut = ((s as any).minut ?? 0) + 10;
                qspCall(s, 'exp_gain', 'makupskl', (Math.floor(Math.random() * 3) + 1));
                ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).mc_inventory['cosmetics'] ?? 0) - (3);
                (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
                (s as any).pcs_makeup = 6;
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 6  &&  ((s as any).pcs_makeup ?? 0) < 6) {
                  scene.text('You apply some makeup thick enough to cover most imperfections, while drawing attention in a way only a goth can.');
                  (s as any).minut = ((s as any).minut ?? 0) + 10;
                  qspCall(s, 'exp_gain', 'makupskl', (Math.floor(Math.random() * 3) + 1));
                  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).mc_inventory['cosmetics'] ?? 0) - (3);
                  (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
                  (s as any).pcs_makeup = 7;
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') === 4  &&  ((s as any).pcs_makeup ?? 0) !== 0) {
                    scene.text('You deliberately smear cosmetics across your face in a messy, smudged pattern.');
                    (s as any).minut = ((s as any).minut ?? 0) + 5;
                    qspCall(s, 'exp_gain', 'makupskl', (Math.floor(Math.random() * 3) + 1));
                    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).mc_inventory['cosmetics'] ?? 0) - (3);
                    (s as any).pcs_makeup = 0;
                  }
                }
              }
            }
          }
        }
      } else {
        scene.text('You don\'t have enough cosmetics to apply your chosen option.');
      }
    }
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).pcs_hairbsh = 1;
    scene.text('You brush your hair.');
  }
  if (String((s as any).locArgs?.[2] ?? '') > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterApplyLipbalm(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[3] ?? '') > 0  &&  ((s as any).lashextensionstyle ?? 0) <= 0  &&  ((s as any).pcs_lashes ?? 0) < String((s as any).locArgs?.[3] ?? '') + 2) {
    if (String((s as any).locArgs?.[3] ?? '') === 1  &&  ((s as any).mc_inventory ?? 0)?.['eyelash_fake'] >= 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterApplyLashesplain(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[3] ?? '') === 2  &&  ((s as any).mc_inventory ?? 0)?.['eyelash_mink'] >= 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterApplyLashesmink(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  // TODO-QSP: end & !! --- works ----
  scene.actions([
    { label: 'View results', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', 'mirror', 'start');
  } },
  ]);
  scene.build();
}

function enterApplyLipbalm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0  &&  ((s as any).pcs_lipbalm ?? 0) <= 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lipbalm'] = ((s as any).mc_inventory['lipbalm'] ?? 0) - (1);
    (s as any).lipkoef = ((s as any).lipkoef ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    if (((s as any).lipkoef ?? 0) > 50) {
      (s as any).lipkoef = 0;
      (s as any).pcs_lip = ((s as any).pcs_lip ?? 0) + (1);
    }
    (s as any).pcs_lipbalm = ((s as any).pcs_lipbalm ?? 0) + (8);
    scene.text('You apply some moisturizing balm on your lips.');
  }
  // TODO-QSP: end & !! --- applyLipbalm ---
  scene.build();
}

function enterApplyLashesmink(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['eyelash_mink'] > 0  &&  ((s as any).pcs_lashes ?? 0) < 4) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['eyelash_mink'] = ((s as any).mc_inventory['eyelash_mink'] ?? 0) - (1);
    if (((s as any).false_lashes ?? 0) >= 1  &&  ((s as any).pcs_lashes ?? 0) === 3) {
      scene.text('You remove your old, plain lashes first.');
    }
    (s as any).false_lashes = 1;
    (s as any).pcs_lashes = 4;
    scene.text('You spend a good bit of time affixing your lavish, mink lash strips.');
  }
  // TODO-QSP: end & !! --- applyLashesmink ---
  scene.build();
}

function enterApplyLashesplain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['eyelash_fake'] > 0  &&  ((s as any).pcs_lashes ?? 0) < 3) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['eyelash_fake'] = ((s as any).mc_inventory['eyelash_fake'] ?? 0) - (1);
    (s as any).false_lashes = 1;
    (s as any).pcs_lashes = 3;
    scene.text('You spend a fair bit of time carefully trimming and affixing your flirtatious false lashes.');
  }
  // TODO-QSP: end & !! --- applyLashesplain ---
  scene.build();
}

function enterApplyMakeupDo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'daily_routine', 'settings_defaults');
  qspGoto(s, 'mirror', 'works', 'droutine_settings[\'makeup_level\']', '0');
  // TODO-QSP: end & !! --- apply_makeup_do ---
  scene.build();
}

function enterBrushHairDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.min(15, Math.max(1, ((s as any).pcs_hairlng ?? 0) / 80)));
  (s as any).pcs_hairbsh = 1;
  scene.img(`${qspFunc(s, '$face_image', '')}`);
  scene.text('You brush your hair.');
  // TODO-QSP: end & !! --- brush_hair_do ---
  scene.actions([
    { label: 'Done', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', 'mirror', 'start');
  } },
  ]);
  scene.build();
}

function enterLipbalmDo(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterApplyLipbalm(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/pc/activities/routine/2.jpg');
  scene.text('You apply some moisturising balm to your lips.');
  // TODO-QSP: end & !! --- lipbalm_do ---
  scene.actions([
    { label: 'Done', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', 'mirror', 'start');
  } },
  ]);
  scene.build();
}

function enterApplyLashesDo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'daily_routine', 'settings_defaults');
  if (((s as any).droutine_settings ?? 0)?.['lashes_type'] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterApplyLashesplain(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).droutine_settings ?? 0)?.['lashes_type'] === 2) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterApplyLashesmink(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end & !! --- apply_lashes_do ---
  scene.actions([
    { label: 'Done', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', 'mirror', 'start');
  } },
  ]);
  scene.build();
}

function enterFin(s: GameState, scene: SceneBuilder): void {
  dynamicGoto(s, 'locM', 'locM_arg');
  // TODO-QSP: end & !! --- fin ----
  scene.build();
}

function enterDBagMirror(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><h1>Compact Mirror</h1></center>');
  scene.img('images/pc/items/mirror_compact.jpg');
  scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
  scene.text('<td cellspacing="0" cellpadding="0" valign="top">');
  // TODO-QSP: dynamic text: 'You have ' + iif(mc_inventory['travel_makeup'] > 0, '<b><<mc_inventory[''travel...
  scene.text('You have ' + ((((s as any).mc_inventory ?? 0)?.['travel_makeup'] > 0) ? ('<b>' + ((s as any).mc_inventory ?? 0)?.['travel_makeup'] ?? '' + '</b>') : ('no')) + ' cosmetic applications and ' + ((((s as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0) ? ('<b>' + ((s as any).mc_inventory ?? 0)?.['makeup_wipes'] ?? '' + '</b>') : ('no')) + ' tissues left in your purse.');
  if (((s as any).pcs_hairbsh ?? 0) < 1  &&  ((s as any).mc_inventory ?? 0)?.['comb'] === 1) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairbsh = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027d_bag_mirror/u0027); return false;"><b>Brush your hair</b></a>');
  }
  if ((!((s as any).pcs_makeup ?? 0))) {
    if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})/u0027makeup_wipes/u0027 -=s.1; s.pcs_makeup = makeup[/u0027base/u0027]; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027d_bag_mirror/u0027); return false;"><b>Clear smeared cosmetics</b></a>');
      if (((s as any).mc_inventory ?? 0)?.['travel_makeup'] >= Math.min(((s as any).makeupSetting ?? 0), 3)) {
        if (((s as any).makeup ?? 0)?.['base'] < ((s as any).makeupSetting ?? 0) + 1) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027kosmetitka_fix/u0027); return false;"><b>Fix your makeup</b></a>');
        }
      } else {
        scene.text('You need portable makeup and tissues to fix your makeup.');
      }
    } else {
      scene.text('You need portable makeup and tissues to fix your makeup.');
    }
  } else {
    if (((s as any).pcs_makeup ?? 0) === 1) {
      if (((s as any).mc_inventory ?? 0)?.['travel_makeup'] > 0) {
        // TODO-QSP: dynamic text: <a href="exec: minut += 3 & gs ''exp_gain'', ''makupskl'', rand(1,3) & pcs_makeu...
        scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; s.pcs_makeup = s.2; (s.mc_inventory ??= {})/u0027travel_makeup/u0027 -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027exp_gain/u0027, /u0027makupskl/u0027, String(window.__gameStore.getState().rand ?? /u0027/u0027)); return false;"><b>Put on light makeup</b></a>');
      }
    } else {
      if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
        if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0) {
          scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})/u0027makeup_wipes/u0027 -=s.1; s.pcs_makeup = makeup[/u0027base/u0027]; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027d_bag_mirror/u0027); return false;"><b>Remove your makeup</b></a>');
        }
      }
    }
    if (((s as any).pcs_lipbalm ?? 0) <= 0  &&  ((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027applyLipbalm/u0027); return false;"><b>Apply lip balm</b></a>');
    }
  }
  scene.text('</td></tr></table></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['din_bad', 'd_bag'] },
  ]);
  scene.build();
}

function enterKosmetitkaFix(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Compact Mirror</h1></center>');
  scene.img('images/pc/activities/routine/4.jpg');
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['makeup_wipes'] = ((s as any).mc_inventory['makeup_wipes'] ?? 0) - (1);
  qspCall(s, 'exp_gain', 'makupskl', (Math.floor(Math.random() * 3) + 1));
  if (((s as any).makeupSetting ?? 0) === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['travel_makeup'] = ((s as any).mc_inventory['travel_makeup'] ?? 0) - (1);
    (s as any).pcs_makeup = 2;
    scene.text('<center>You carefully fix your makeup and restore the neutral and light tones that bring out your natural beauty.</center>');
  } else {
    if (((s as any).makeupSetting ?? 0) === 2) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['travel_makeup'] = ((s as any).mc_inventory['travel_makeup'] ?? 0) - (2);
      (s as any).pcs_makeup = 3;
      scene.text('<center>You carefully fix your makeup and restore the mildly vibrant tones and colors that cover your minor imperfections and enhance your best features.</center>');
    } else {
      if (((s as any).makeupSetting ?? 0) === 3) {
        (s as any).minut = ((s as any).minut ?? 0) + 10;
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['travel_makeup'] = ((s as any).mc_inventory['travel_makeup'] ?? 0) - (3);
        (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
        (s as any).pcs_makeup = 4;
        scene.text('<center>You carefully fix your makeup and restore the deeper, richer shades, thick enough to cover most imperfections, while drawing attention to your eyes and lips.</center>');
      } else {
        if (((s as any).makeupSetting ?? 0) === 5) {
          (s as any).minut = ((s as any).minut ?? 0) + 10;
          ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['travel_makeup'] = ((s as any).mc_inventory['travel_makeup'] ?? 0) - (3);
          (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
          (s as any).pcs_makeup = 6;
          scene.text('<center>You carefully fix your makeup and restore the bright, seductive shades, thick enough to cover most imperfections, while drawing attention in a way only a bimbo can.</center>');
        } else {
          if (((s as any).makeupSetting ?? 0) === 6) {
            (s as any).minut = ((s as any).minut ?? 0) + 10;
            ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['travel_makeup'] = ((s as any).mc_inventory['travel_makeup'] ?? 0) - (3);
            (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
            (s as any).pcs_makeup = 7;
            scene.text('<center>You carefully fix your makeup and restore the makeup thick enough to cover most imperfections, while drawing attention in a way only a goth can.</center>');
          }
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['mirror', 'd_bag_mirror'] },
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
    case 'routine_description':
      enterRoutineDescription(s, scene);
      break;
    case 'routine_check':
      enterRoutineCheck(s, scene);
      break;
    case 'steam':
      enterSteam(s, scene);
      break;
    case 'brush':
      enterBrush(s, scene);
      break;
    case 'works_routine':
      enterWorksRoutine(s, scene);
      break;
    case 'works':
      enterWorks(s, scene);
      break;
    case 'applyLipbalm':
      enterApplyLipbalm(s, scene);
      break;
    case 'applyLashesmink':
      enterApplyLashesmink(s, scene);
      break;
    case 'applyLashesplain':
      enterApplyLashesplain(s, scene);
      break;
    case 'apply_makeup_do':
      enterApplyMakeupDo(s, scene);
      break;
    case 'brush_hair_do':
      enterBrushHairDo(s, scene);
      break;
    case 'lipbalm_do':
      enterLipbalmDo(s, scene);
      break;
    case 'apply_lashes_do':
      enterApplyLashesDo(s, scene);
      break;
    case 'fin':
      enterFin(s, scene);
      break;
    case 'd_bag_mirror':
      enterDBagMirror(s, scene);
      break;
    case 'kosmetitka_fix':
      enterKosmetitkaFix(s, scene);
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
