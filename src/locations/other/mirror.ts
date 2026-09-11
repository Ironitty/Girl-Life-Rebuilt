import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).mirror_steam ?? 0) === ((s as any).hour ?? 0)  &&  (((s as any).loc ?? 0) === 'vanrPar'  ||  ((s as any).loc ?? 0) === 'vanr'  ||  ((s as any).loc_arg ?? 0) === 'ybathroom'  ||  ((s as any).loc ?? 0) === 'city_house_res_bathr')) {
    scene.actions([{ label: 'Continue', goto: ['mirror', 'steam'] }]);
  }
  if (((s as any).newstylemirror ?? 0) === 1) {
    ((s as any).serv ?? {})['avatar'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "mirror" }) + ' src="<<func(\'$face_image\')>>"></center>';
    if (((s as any).cheatVars ?? 0)?.['auto_brush'] === 1  &&  (!((s as any).pcs_hairbsh ?? 0))) {
      // TODO-QSP: xgt 'mirror', 'brush'
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
      ((s as any).serv ?? {})['hairbrush'] = '<a href="exec: xgt \'mirror\', \'brush\'"><img src="images/system/icons/action/hairbrush.png"></a>';
    } else {
      if (((s as any).pcs_hairlng ?? 0) > 80  &&  (!((s as any).hbraids ?? 0))) {
        if (((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
          ((s as any).serv ?? {})['ponytail'] = '<a href="exec:hscrunchw = 1 & gs \'mirror\', \'start\'"><img src="images/system/icons/action/scrunchy.png"></a>';
          ((s as any).serv ?? {})['ponytail desc'] = 'As you have a scrunchy, you can arrange your hair into a <a href="exec:hscrunchw = 1 & gs \'mirror\', \'start\'">ponytail</a>. You have <b>' + qspUntranslated(s, "mc_inventory['scrunchies']>", { location: "mirror" }) + '</b> scrunchies left.';
        }
        if (((s as any).pcs_hairlng ?? 0) <= 400  &&  ((s as any).mc_inventory ?? 0)?.['kirbygrips'] >= 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
          ((s as any).serv ?? {})['bun'] = '<a href="exec:hpingripw = 1 & gs \'mirror\', \'start\'"><img src="images/system/icons/action/clips_pins_grips.png"></a>';
          ((s as any).serv ?? {})['bun desc'] = 'You have several clips, pins and grips for you hair. Hence, you can <a href="exec:hpingripw = 1 & gs \'mirror\', \'start\'">updo your hair</a>. You have <b>' + qspUntranslated(s, "mc_inventory['kirbygrips']>", { location: "mirror" }) + '</b> hair accessories at your disposal.';
        }
        if (((s as any).pcs_hairlng ?? 0) <= 800  &&  ((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 1) {
          if (((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 2  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
            ((s as any).serv ?? {})['pigtails'] = '<a href="exec:hpigtail = 1 & hscrunchw = 2 & gs \'mirror\', \'start\'"><img src="images/system/icons/action/hair_ties.png"></a>';
            ((s as any).serv ?? {})['pigtails desc'] = 'You can use two hair ties to make yourself some <a href="exec:hpigtail = 1 & hscrunchw = 2 & gs \'mirror\', \'start\'">pigtails</a>.';
          }
          if (((s as any).canBraidHair ?? 0) === 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) + ((s as any).hpigtail ?? 0) === 0) {
            ((s as any).serv ?? {})['braid'] = '<a href="exec:minut += pcs_hairlng/10 & hbraids = 15 & gs \'mirror\', \'start\'"><img src="images/system/icons/action/braiding.png"></a>';
            ((s as any).serv ?? {})['braid desc'] = 'You can spend ' + ((s as any).pcs_hairlng ?? 0)/10> + ' minutes <a href="exec:minut += pcs_hairlng/10 & hbraids = 15 & gs \'mirror\', \'start\'">braiding</a> your hair, just the way your sister taught you.';
          }
        }
      }
    }
    if (((s as any).hscrunchw ?? 0) === 1) {
      ((s as any).serv ?? {})['ponytail'] = '<a href="exec:hscrunchw = 0 & gs \'mirror\', \'start\'"><img src="images/system/icons/action/ponytail.png"></a>';
      ((s as any).serv ?? {})['ponytail desc'] = 'Remove the <a href="exec:hscrunchw = 0 & gs \'mirror\', \'start\'">scrunchie</a> to get rid of the ponytail.';
    }
    if (((s as any).hscrunchw ?? 0) === 2) {
      ((s as any).serv ?? {})['pigtails'] = '<a href="exec:hpigtail = 0 & hscrunchw = 0 & gs \'mirror\', \'start\'"><img src="images/system/icons/action/pigtails.png"></a>';
      ((s as any).serv ?? {})['pigtails desc'] = '<a href="exec:hpigtail = 0 & hscrunchw = 0 & gs \'mirror\', \'start\'">Remove</a> your scrunchies and let your hair flow free again.';
    }
    if (((s as any).hpingripw ?? 0) === 1) {
      ((s as any).serv ?? {})['bun'] = '<a href="exec:hpingripw = 0 & gs \'mirror\', \'start\'"><img src="images/system/icons/action/bun.png"></a>';
      ((s as any).serv ?? {})['bun desc'] = 'Let your hair <a href="exec:hpingripw = 0 & gs \'mirror\', \'start\'">flow free</a>.';
    }
    if (((s as any).hbraids ?? 0) > 0) {
      ((s as any).serv ?? {})['braid'] = '<a href="exec:minut += hbraids*2+pcs_hairlng/50 & hbraids = 0 & gs \'mirror\', \'start\'"><img src="images/system/icons/action/braid.png"></a>';
      ((s as any).serv ?? {})['braid desc'] = 'Take ' + ((s as any).hbraids ?? 0)*2+((s as any).pcs_hairlng ?? 0)/50> + ' minutes removing your <a href="exec:minut += hbraids*2+pcs_hairlng/50 & hbraids = 0 & gs \'mirror\', \'start\'">braid</a>.';
    }
    ((s as any).serv ?? {})['back'] = '<a href="exec: gt \'mirror\',\'fin\'"><img src="images/system/icons/action/back.png"></a>';
    if (((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0  &&  ((s as any).pcs_lipbalm ?? 0) <= 0) {
      ((s as any).serv ?? {})['lipbalm'] = '<a href="exec: cla & gs \'mirror\',\'applyLipbalm\' & act \'View results\':gt \'mirror\', \'start\'"><img src="images/system/icons/action/lipbalm.png"></a>';
    }
    if (((s as any).mc_inventory ?? 0)?.['eyelash_fake'] > 0  &&  ((s as any).pcs_lashes ?? 0) < 3  &&  ((s as any).lashextensionstyle ?? 0) <= 0) {
      ((s as any).serv ?? {})['falselashes'] = '<a href="exec: cla & gs \'mirror\',\'applyLashesplain\' & act \'View results\':gt \'mirror\', \'start\'"><img src="images/system/icons/action/falselashes.png"></a>';
    }
    if (((s as any).mc_inventory ?? 0)?.['eyelash_mink'] > 0  &&  ((s as any).pcs_lashes ?? 0) < 4  &&  ((s as any).lashextensionstyle ?? 0) <= 0) {
      ((s as any).serv ?? {})['minklashes'] = '<a href="exec: cla & gs \'mirror\',\'applyLashesmink\' & act \'View results\':gt \'mirror\', \'start\'"><img src="images/system/icons/action/minklashes.png"></a>';
    }
    if (((s as any).pcs_makeup ?? 0) === ((s as any).makeup ?? 0)?.['base']  &&  ((s as any).mc_inventory ?? 0)?.['cosmetics'] > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src=""images/pc/activities/routine/1.jpg""></center>
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src=""images/pc/activities/routine/1.jpg""></center>`);
      scene.text('You consider for a moment which look you want to go for.');
      if (((s as any).pcs_makeup ?? 0) < 2  &&  ((s as any).mc_inventory ?? 0)?.['cosmetics'] >= 1) {
        scene.actions([
          { label: 'Light make-up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
    ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (1);
    (s as any).pcs_makeup = 2;
    // TODO-QSP: dynamic text: <<$makeupLight>>
    scene.text(`${((s as any).makeupLight ?? 0)}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
        ]);
      }
      if (((s as any).pcs_makeup ?? 0) < 3  &&  ((s as any).mc_inventory ?? 0)?.['cosmetics'] >= 2) {
        scene.actions([
          { label: 'Vibrant make-up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
    ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (2);
    (s as any).pcs_makeup = 3;
    // TODO-QSP: dynamic text: <<$makeupNatural>>
    scene.text(`${((s as any).makeupNatural ?? 0)}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
        ]);
      }
      if (((s as any).mc_inventory ?? 0)?.['cosmetics'] >= 3) {
        if (((s as any).pcs_makeup ?? 0) < 4) {
          scene.actions([
            { label: 'Thick make-up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
    ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (3);
    (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
    (s as any).pcs_makeup = 4;
    // TODO-QSP: dynamic text: <<$makeupHeavy>>
    scene.text(`${((s as any).makeupHeavy ?? 0)}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
          ]);
        }
        if (((s as any).pcs_makeup ?? 0) < 6) {
          scene.actions([
            { label: 'Bimbo make-up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
    ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (3);
    (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
    (s as any).pcs_makeup = 6;
    // TODO-QSP: dynamic text: <<$makeupBimbo>>
    scene.text(`${((s as any).makeupBimbo ?? 0)}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
          ]);
        }
        if (((s as any).pcs_makeup ?? 0) < 6) {
          scene.actions([
            { label: 'Goth make-up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
    ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (3);
    (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
    (s as any).pcs_makeup = 7;
    // TODO-QSP: dynamic text: <<$makeupGoth>>
    scene.text(`${((s as any).makeupGoth ?? 0)}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Smeared make-up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
    ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (3);
    (s as any).pcs_makeup = 0;
    // TODO-QSP: dynamic text: <<$makeupSmeared>>
    scene.text(`${((s as any).makeupSmeared ?? 0)}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
        ]);
      }
      // TODO-QSP: "
      ((s as any).serv ?? {})['makeup'] = '<a href="exec: dynamic $serv4"><img src="images/system/icons/action/makeup.png"></a>';
      scene.actions([
        { label: 'Change your mind', goto: ['mirror', 'start'] },
      ]);
    }
    // TODO-QSP: dynamic text: <center><table align=center cellspacing=0 cellpadding=0><tr><td align=center col...
    scene.text(`<center><table align=center cellspacing=0 cellpadding=0><tr><td align=center colspan=15>${((s as any).serv ?? 0)?.['avatar']}</td></tr><tr><td colspan=15><hr></td></tr><tr><td align=center>${((s as any).serv ?? 0)?.['falselashes']}</td>  <td align=center>${((s as any).serv ?? 0)?.['minklashes']}</td><td align=center>${((s as any).serv ?? 0)?.['lipbalm']}</td><td align=center>${((s as any).serv ?? 0)?.['makeup']}</td><td align=center>${((s as any).serv ?? 0)?.['ponytail']}</td><td align=center>${((s as any).serv ?? 0)?.['bun']}</td><td align=center>${((s as any).serv ?? 0)?.['pigtails']}</td><td align=center>${((s as any).serv ?? 0)?.['braid']}</td><td align=center>${((s as any).serv ?? 0)?.['hairbrush']}</td><td align=center>${((s as any).serv ?? 0)?.['back']}</td></tr></table></center>`);
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
    scene.text(`${((s as any).pcs_apprnc_text ?? 0)}`);
    // TODO-QSP: dynamic text: <<$hair>>
    scene.text(`${((s as any).hair ?? 0)}`);
    // TODO-QSP: dynamic text: <<$pc_descFull['makeup']>>. You have ' + iif(pcs_eyesize > 1, '<<$pc_desc['eye s...
    scene.text(`${((s as any).pc_descFull ?? 0)?.['makeup']}. You have ' + iif(pcs_eyesize > 1, '${((s as any).pc_desc ?? 0)?.['eye size']} ', ') + '${((s as any).pc_desc ?? 0)?.['eye colour']} eyes ${((s as any).pcs_lashes_txt ?? 0)}.`);
    if (((s as any).glass ?? 0) > 0) {
      // TODO-QSP: dynamic text: You are wearing <<$pc_descWordy['vision']>>.
      scene.text(`You are wearing ${((s as any).pc_descWordy ?? 0)?.['vision']}.`);
    }
    // TODO-QSP: $pcs_teeth_txt
    // TODO-QSP: dynamic text: <<$pc_descFull['skin']>>
    scene.text(`${((s as any).pc_descFull ?? 0)?.['skin']}`);
    if (((s as any).curly ?? 0) > 0  &&  (!((s as any).defcurly ?? 0))) {
      ((s as any).serv ?? {})['hhair'] = 'Your curly hair will last for another <b>' + qspUntranslated(s, "curly>", { location: "mirror" }) + '</b> days.';
    }
    if (((s as any).straight ?? 0) > 0  &&  ((s as any).defcurly ?? 0) === 1) {
      ((s as any).serv ?? {})['hhair'] = 'Your straightened hair will last for another <b>' + qspUntranslated(s, "straight>", { location: "mirror" }) + '</b> days.';
    }
    if (((s as any).hbraids ?? 0) > 0) {
      ((s as any).serv ?? {})['hbraids'] = 'Your braided hair will last for another <b>' + qspUntranslated(s, "hbraids>", { location: "mirror" }) + '</b> days.';
    }
    if (((s as any).pcs_haircol ?? 0) !== ((s as any).nathcol ?? 0)) {
      if (((s as any).dyefade ?? 0) > 0  &&  ((s as any).dyefade ?? 0) < 7) {
        ((s as any).serv ?? {})['hdye'] = 'Your hair dye is beginning to fade and your roots are showing.';
      }
      if ((!((s as any).dyefade ?? 0))) {
        ((s as any).serv ?? {})['hdye'] = 'Your hair dye has faded and looks terrible.';
      }
    }
    if (((s as any).serv ?? 0)?.['hhair'] !== '') {
      // TODO-QSP: dynamic text: <<$serv["hhair"]>>
      scene.text(`${((s as any).serv ?? 0)?.['hhair']}`);
    }
    if (((s as any).serv ?? 0)?.['hbraids'] !== '') {
      // TODO-QSP: dynamic text: <<$serv["hbraids"]>>
      scene.text(`${((s as any).serv ?? 0)?.['hbraids']}`);
    }
    if (((s as any).serv ?? 0)?.['hdye'] !== '') {
      // TODO-QSP: dynamic text: <<$serv["hdye"]>>
      scene.text(`${((s as any).serv ?? 0)?.['hdye']}`);
    }
    if (((s as any).serv ?? 0)?.['ponytail desc'] !== '') {
      // TODO-QSP: dynamic text: <<$serv["ponytail desc"]>>
      scene.text(`${((s as any).serv ?? 0)?.['ponytail desc']}`);
    }
    if (((s as any).serv ?? 0)?.['bun desc'] !== '') {
      // TODO-QSP: dynamic text: <<$serv["bun desc"]>>
      scene.text(`${((s as any).serv ?? 0)?.['bun desc']}`);
    }
    if (((s as any).serv ?? 0)?.['pigtails desc'] !== '') {
      // TODO-QSP: dynamic text: <<$serv["pigtails desc"]>>
      scene.text(`${((s as any).serv ?? 0)?.['pigtails desc']}`);
    }
    if (((s as any).serv ?? 0)?.['braid desc'] !== '') {
      // TODO-QSP: dynamic text: <<$serv["braid desc"]>>
      scene.text(`${((s as any).serv ?? 0)?.['braid desc']}`);
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
    scene.text(`${((s as any).pcs_apprnc_text ?? 0)}`);
    // TODO-QSP: dynamic text: <<$hair>>
    scene.text(`${((s as any).hair ?? 0)}`);
    // TODO-QSP: dynamic text: <<$pc_descFull['makeup']>>. Your ' + iif(pcs_eyesize > 1, '<<$pc_desc['eye size'...
    scene.text(`${((s as any).pc_descFull ?? 0)?.['makeup']}. Your ' + iif(pcs_eyesize > 1, '${((s as any).pc_desc ?? 0)?.['eye size']} ', ') + 'eyes are ${((s as any).pc_desc ?? 0)?.['eye colour']} ${((s as any).pcs_lashes_txt ?? 0)}.`);
    if (((s as any).glass ?? 0) > 0) {
      // TODO-QSP: dynamic text: You are wearing <<$pc_descWordy['vision']>>.
      scene.text(`You are wearing ${((s as any).pc_descWordy ?? 0)?.['vision']}.`);
    }
    // TODO-QSP: dynamic text: You have <<$pcs_lipbalm_str>> <<$pc_desc['lip size']>> lips.
    scene.text(`You have ${((s as any).pcs_lipbalm_str ?? 0)} ${((s as any).pc_desc ?? 0)?.['lip size']} lips.`);
    // TODO-QSP: $pcs_teeth_txt
    // TODO-QSP: dynamic text: <<$pc_descFull['skin']>>
    scene.text(`${((s as any).pc_descFull ?? 0)?.['skin']}`);
    if (((s as any).curly ?? 0) > 0  &&  (!((s as any).defcurly ?? 0))) {
      // TODO-QSP: dynamic text: <br>Your curly hair will last for another <<curly>> days.
      scene.text(`<br>Your curly hair will last for another ${((s as any).curly ?? 0)} days.`);
    }
    if (((s as any).straight ?? 0) > 0  &&  ((s as any).defcurly ?? 0) === 1) {
      // TODO-QSP: dynamic text: <br>Your straightened hair will last for another <<straight>> days.
      scene.text(`<br>Your straightened hair will last for another ${((s as any).straight ?? 0)} days.`);
    }
    if (((s as any).hbraids ?? 0) > 0) {
      // TODO-QSP: dynamic text: <br>Your braided hair will last for another <<hbraids>> days.
      scene.text(`<br>Your braided hair will last for another ${((s as any).hbraids ?? 0)} days.`);
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
      // TODO-QSP: xgt 'mirror', 'brush'
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
        scene.text(`As you have a scrunchy, you can arrange your hair into a <a href="exec:hscrunchw = 1 & gs 'mirror', 'start'">ponytail</a>. You have ${((s as any).mc_inventory ?? 0)?.['scrunchies']} scrunchies left.`);
      }
      if (((s as any).pcs_hairlng ?? 0) <= 400  &&  ((s as any).mc_inventory ?? 0)?.['kirbygrips'] >= 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
        // TODO-QSP: dynamic text: You have several clips, pins and grips for you hair. Hence, you can <a href="exe...
        scene.text(`You have several clips, pins and grips for you hair. Hence, you can <a href="exec:hpingripw = 1 & gs 'mirror', 'start'">updo your hair</a>. You have ${((s as any).mc_inventory ?? 0)?.['kirbygrips']} hair accessories at your disposal.`);
      }
      if (((s as any).pcs_hairlng ?? 0) <= 800  &&  ((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 1) {
        if (((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 2  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
          scene.text('You can use two hair ties to make yourself some <a href="exec:hpigtail = 1 & hscrunchw = 2 & gs \'mirror\', \'start\'">pigtails</a>.');
        }
        if (((s as any).canBraidHair ?? 0) === 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) + ((s as any).hpigtail ?? 0) === 0) {
          // TODO-QSP: dynamic text: You can spend <<pcs_hairlng/10>> minutes <a href="exec:minut += pcs_hairlng/10 &...
          scene.text(`You can spend ${((s as any).pcs_hairlng ?? 0)/10} minutes <a href="exec:minut += pcs_hairlng/10 & hbraids = 15 & gs 'mirror', 'start'">braiding</a> your hair, just the way your sister taught you.`);
        }
      }
    }
    if (((s as any).hscrunchw ?? 0) === 1) {
      scene.text('Remove the <a href="exec:hscrunchw = 0 & gs \'mirror\', \'start\'">scrunchie</a> to get rid of the ponytail.');
    }
    if (((s as any).hscrunchw ?? 0) === 2) {
      scene.text('<a href="exec:hpigtail = 0 & hscrunchw = 0 & gs \'mirror\', \'start\'">Remove</a> your scrunchies and let your hair flow free again.');
    }
    if (((s as any).hpingripw ?? 0) === 1) {
      scene.text('Let your hair <a href="exec:hpingripw = 0 & gs \'mirror\', \'start\'">flow free</a>.');
    }
    if (((s as any).hbraids ?? 0) > 0) {
      // TODO-QSP: dynamic text: Take <<hbraids*2+pcs_hairlng/50>> minutes removing your <a href="exec:minut += h...
      scene.text(`Take ${((s as any).hbraids ?? 0)*2+((s as any).pcs_hairlng ?? 0)/50} minutes removing your <a href="exec:minut += hbraids*2+pcs_hairlng/50 & hbraids = 0 & gs 'mirror', 'start'">braid</a>.`);
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['cosmetics'] > 0) {
  }
  if (((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0) {
    // TODO-QSP: *pl ' | Lip gloss: <<mc_inventory[''lipbalm'']>>' else *pl ' You have no lip gloss left.'
  }
  if (((s as any).mc_inventory ?? 0)?.['eyelash_fake'] > 0) {
  }
  if (((s as any).mc_inventory ?? 0)?.['eyelash_mink'] > 0) {
    // TODO-QSP: *pl ' | Mink lashes: <<mc_inventory[''eyelash_mink'']>>' else *pl ' You have no mink lashes left.'
  }
  if (((s as any).mc_inventory ?? 0)?.['umbrella'] === 0) {
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    // TODO-QSP: act 'Brush your hair': xgt 'mirror', 'brush'
  }
  if (((s as any).pcs_makeup ?? 0) === ((s as any).makeup ?? 0)?.['base']  &&  ((s as any).mc_inventory ?? 0)?.['cosmetics'] > 0) {
    scene.actions([
      { label: 'Apply makeup', handler: (st: GameState) => {
    scene.img('images/pc/activities/routine/1.jpg');
    scene.text('You consider for a moment which look you want to go for.');
    if (((s as any).pcs_makeup ?? 0) < 2  &&  ((s as any).mc_inventory ?? 0)?.['cosmetics'] > 0) {
      scene.actions([
        { label: 'Light make-up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
    ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (1);
    (s as any).pcs_makeup = 2;
    // TODO-QSP: dynamic text: <<$makeupLight>>
    scene.text(`${((s as any).makeupLight ?? 0)}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
      ]);
    }
    if (((s as any).pcs_makeup ?? 0) < 3  &&  ((s as any).mc_inventory ?? 0)?.['cosmetics'] > 1) {
      scene.actions([
        { label: 'Vibrant make-up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
    ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (2);
    (s as any).pcs_makeup = 3;
    // TODO-QSP: dynamic text: <<$makeupNatural>>
    scene.text(`${((s as any).makeupNatural ?? 0)}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['cosmetics'] > 2) {
      if (((s as any).pcs_makeup ?? 0) < 4) {
        scene.actions([
          { label: 'Thick make-up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
    ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (3);
    (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
    (s as any).pcs_makeup = 4;
    // TODO-QSP: dynamic text: <<$makeupHeavy>>
    scene.text(`${((s as any).makeupHeavy ?? 0)}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
        ]);
      }
      if (((s as any).pcs_makeup ?? 0) < 6) {
        scene.actions([
          { label: 'Bimbo make-up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
    ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (3);
    (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
    (s as any).pcs_makeup = 6;
    // TODO-QSP: dynamic text: <<$makeupBimbo>>
    scene.text(`${((s as any).makeupBimbo ?? 0)}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
        ]);
      }
      if (((s as any).pcs_makeup ?? 0) < 6) {
        scene.actions([
          { label: 'Goth make-up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
    ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (3);
    (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
    (s as any).pcs_makeup = 7;
    // TODO-QSP: dynamic text: <<$makeupGoth>>
    scene.text(`${((s as any).makeupGoth ?? 0)}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Smeared make-up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
    ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (3);
    (s as any).pcs_makeup = 0;
    // TODO-QSP: dynamic text: <<$makeupSmeared>>
    scene.text(`${((s as any).makeupSmeared ?? 0)}`);
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
    qspCall(s, 'mirror', 'applyLipbalm');
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
    qspCall(s, 'mirror', 'applyLashesplain');
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
    qspCall(s, 'mirror', 'applyLashesmink');
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
  if (((s as any).makeup ?? 0)['routine_' + ((s as any).temp_routine_index ?? 0)] !== '') {
    qspCall(s, 'mirror', 'routine_description', ((s as any).temp_routine_index ?? 0));
    if (qspFunc(s, 'mirror', 'routine_check', ((s as any).temp_routine_index ?? 0))) {
      // TODO-QSP: dynamic "
      // TODO-QSP: "
      scene.actions([
        { label: 'Apply <<$temp_routine_name>>', handler: (st: GameState) => {
    // TODO-QSP: gt 'mirror', 'works_routine', <<temp_routine_index>>
  } },
      ]);
    }
  }
  (s as any).temp_routine_index = ((s as any).temp_routine_index ?? 0) + (1);
  if (((s as any).temp_routine_index ?? 0) <= ((s as any).temp_max_cosmetic_routines ?? 0)) {
    // TODO-QSP: jump 'makeup_routine_apply_acts_loop'
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Move away from the mirror', goto: ['mirror', 'fin'] },
    { label: 'Manage your custom make-up routines', handler: (st: GameState) => {
    qspCall(st, 'mirror', 'routine_manage');
  } },
    { label: '<<iif(newstylemirror,\'Change to the old style mirror\',\'Change to the new style mirror\')>>', handler: (st: GameState) => {
    (st as any).newstylemirror = ((((st as any).newstylemirror ?? 0)) ? (0) : (1));
  }, goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

function enterGetMaxCosmeticRoutines(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 4;
  scene.build();
}

function enterRoutineManage(s: GameState, scene: SceneBuilder): void {
  scene.text('Select make-up level');
  // TODO-QSP: *p iif(makeupSetting = 0,  ' none,',    '<a href="exec:makeupSetting = 0  & gs ''mirror'', ''routine...
  // TODO-QSP: *p iif(makeupSetting = 1,  ' light,',    ' <a href="exec:makeupSetting = 1  & gs ''mirror'', ''routi...
  // TODO-QSP: *p iif(makeupSetting = 2,  ' vibrant,',  ' <a href="exec:makeupSetting = 2  & gs ''mirror'', ''routi...
  // TODO-QSP: *p iif(makeupSetting = 3,  ' thick,',    ' <a href="exec:makeupSetting = 3  & gs ''mirror'', ''routi...
  // TODO-QSP: *p iif(makeupSetting = 4,  ' smeared,',  ' <a href="exec:makeupSetting = 4  & gs ''mirror'', ''routi...
  // TODO-QSP: *p iif(makeupSetting = 5,  ' bimbo',    ' <a href="exec:makeupSetting = 5  & gs ''mirror'', ''routin...
  scene.text('Choose if you will use lipbalm');
  // TODO-QSP: *p iif(cust_lipbalm = 0, 'no,', '<a href="exec:cust_lipbalm = 0 & gs ''mirror'', ''routine_manage''"...
  scene.text('Choose lash options');
  // TODO-QSP: *p iif(custlashes = 0, 'none,', '<a href="exec:custlashes = 0 & gs ''mirror'', ''routine_manage''">n...
  // TODO-QSP: *p iif(custlashes = 1, ' fake,', ' <a href="exec:custlashes = 1 & gs ''mirror'', ''routine_manage''"...
  (s as any).temp_routine_index = 0;
  (s as any).temp_max_cosmetic_routines = qspFunc(s, 'mirror', 'get_max_cosmetic_routines');
  // TODO-QSP: :makeup_routine_save_selector_loop
  (s as any).temp_routine_index = ((s as any).temp_routine_index ?? 0) + (1);
  if (((s as any).temp_routine_index ?? 0) <= ((s as any).temp_max_cosmetic_routines ?? 0)  &&  ((s as any).makeup ?? 0)['routine_' + ((s as any).temp_routine_index ?? 0)] !== '') {
    // TODO-QSP: jump 'makeup_routine_save_selector_loop'
  }
  // TODO-QSP: dynamic "if temp_routine_index <= temp_max_cosmetic_routines:
  // TODO-QSP: end"
  (s as any).temp_routine_index = 1;
  // TODO-QSP: :makeup_routine_manage_acts_loop
  // TODO-QSP: dynamic "if $makeup['routine_<<temp_routine_index>>'] ! '':
  qspCall(s, 'mirror', 'routine_description', ((s as any).temp_routine_index ?? 0), 'no_color');
  // TODO-QSP: end"
  (s as any).temp_routine_index = ((s as any).temp_routine_index ?? 0) + (1);
  if (((s as any).temp_routine_index ?? 0) <= ((s as any).temp_max_cosmetic_routines ?? 0)) {
    // TODO-QSP: jump 'makeup_routine_manage_acts_loop'
  }
  scene.actions([
    { label: 'Exit', goto: ['mirror', 'start'] },
    { label: 'Save routine', handler: (st: GameState) => {
    ((s as any).makeup ?? {})['routine_' + String((s as any).temp_routine_index || '') + '_makeup'] = ((s as any).makeupSetting ?? 0);
    ((s as any).makeup ?? {})['routine_' + String((s as any).temp_routine_index || '') + '_lipbalm'] = ((s as any).cust_lipbalm ?? 0);
    ((s as any).makeup ?? {})['routine_' + String((s as any).temp_routine_index || '') + '_lashes'] = ((s as any).custlashes ?? 0);
    ((s as any).makeup ?? {})['routine_' + String((s as any).temp_routine_index || '') + ''] = ((s as any).routine ?? 0);
    ((s as any).makeup ?? {})['routine_' + String((s as any).temp_routine_index || '') + '_name'] = 'routine ' + qspUntranslated(s, "temp_routine_index>", { location: "mirror" }) + '';
    qspCall(s, 'mirror', 'routine_manage');
  } },
    { label: '<<temp_routine_index>>. Remove ""<<$temp_routine_name>>""', handler: (st: GameState) => {
    qspCall(s, 'array', 'remove_element', 'makeup', 'routine_' + qspUntranslated(s, "temp_routine_index>", { location: "mirror" }) + '');
    qspCall(s, 'array', 'remove_element', 'makeup', 'routine_' + qspUntranslated(s, "temp_routine_index>", { location: "mirror" }) + '_name');
    qspCall(s, 'mirror', 'routine_manage');
  } },
    { label: '<<temp_routine_index>>. Rename ""<<$temp_routine_name>>""', handler: (st: GameState) => {
    ((s as any).makeup ?? {})['routine_' + String((s as any).temp_routine_index || '') + '_name'] = 0;
    qspCall(s, 'mirror', 'routine_manage');
  } },
  ]);
  scene.build();
}

function enterRoutineDescription(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'mirror', 'routine_check', qspUntranslated(s, "ARGS[1]", { location: "mirror" }))) {
  }
  if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_makeup'] > 0) {
    if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_makeup'] === 4) {
      if (((s as any).locArgs?.[2] ?? 0) === ''  &&  ((s as any).pcs_makeup ?? 0) !== 0) {
        if (((s as any).mc_inventory ?? 0)?.['cosmetics'] >= 3) {
        }
      }
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === ''  &&  ((s as any).pcs_makeup ?? 0) < ((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_makeup'] + 1) {
        if (((s as any).mc_inventory ?? 0)?.['cosmetics'] >= Math.min(qspUntranslated(s, "makeup[\u00000\u0000]", { location: "mirror" }), 3)) {
        }
      }
    }
    if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_makeup'] === 1) {
      // TODO-QSP: dynamic text:  <<$temp_prefix>>Light make-up<<$temp_postfix>>
      scene.text(` ${((s as any).temp_prefix ?? 0)}Light make-up${((s as any).temp_postfix ?? 0)}`);
    } else {
      if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_makeup'] === 2) {
        // TODO-QSP: dynamic text:  <<$temp_prefix>>Vibrant make-up<<$temp_postfix>>
        scene.text(` ${((s as any).temp_prefix ?? 0)}Vibrant make-up${((s as any).temp_postfix ?? 0)}`);
      } else {
        if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_makeup'] === 3) {
          // TODO-QSP: dynamic text:  <<$temp_prefix>>Thick make-up<<$temp_postfix>>
          scene.text(` ${((s as any).temp_prefix ?? 0)}Thick make-up${((s as any).temp_postfix ?? 0)}`);
        } else {
          if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_makeup'] === 4) {
            // TODO-QSP: dynamic text:  <<$temp_prefix>>Smeared make-up<<$temp_postfix>>
            scene.text(` ${((s as any).temp_prefix ?? 0)}Smeared make-up${((s as any).temp_postfix ?? 0)}`);
          } else {
            if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_makeup'] === 5) {
              // TODO-QSP: dynamic text:  <<$temp_prefix>>Bimbo make-up<<$temp_postfix>>
              scene.text(` ${((s as any).temp_prefix ?? 0)}Bimbo make-up${((s as any).temp_postfix ?? 0)}`);
            } else {
              if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_makeup'] === 6) {
                // TODO-QSP: dynamic text:  <<$temp_prefix>>Goth make-up<<$temp_postfix>>
                scene.text(` ${((s as any).temp_prefix ?? 0)}Goth make-up${((s as any).temp_postfix ?? 0)}`);
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_lipbalm'] > 0) {
    if (((s as any).locArgs?.[2] ?? 0) === ''  &&  ((s as any).pcs_lipbalm ?? 0) < ((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_lipbalm']) {
      if (((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0) {
      }
    }
    // TODO-QSP: dynamic text:  <<$temp_prefix>>Lipbalm<<$temp_postfix>>
    scene.text(` ${((s as any).temp_prefix ?? 0)}Lipbalm${((s as any).temp_postfix ?? 0)}`);
  }
  if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_lashes'] > 0) {
    if (((s as any).locArgs?.[2] ?? 0) === ''  &&  ((s as any).lashextensionstyle ?? 0) <= 0  &&  ((s as any).pcs_lashes ?? 0) < ((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_lashes'] + 2) {
      if ((((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_lashes'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['eyelash_fake'] >= 1)  ||  (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_lashes'] === 2  &&  ((s as any).mc_inventory ?? 0)?.['eyelash_mink'] >= 1)) {
      }
    }
    if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_lashes'] === 1) {
      // TODO-QSP: dynamic text:  <<$temp_prefix>>False lashes<<$temp_postfix>>
      scene.text(` ${((s as any).temp_prefix ?? 0)}False lashes${((s as any).temp_postfix ?? 0)}`);
    } else {
      if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_lashes'] === 2) {
        // TODO-QSP: dynamic text:  <<$temp_prefix>>Mink false lashes<<$temp_postfix>>
        scene.text(` ${((s as any).temp_prefix ?? 0)}Mink false lashes${((s as any).temp_postfix ?? 0)}`);
      }
    }
  }
  scene.build();
}

function enterRoutineCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_makeup'] === 4  &&  ((s as any).pcs_makeup ?? 0) !== 0  &&  ((s as any).mc_inventory ?? 0)?.['cosmetics'] >= 3) {
    (s as any).result = 1;
    return;
  }
  if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_makeup'] > 0  &&  ((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_makeup'] !== 4  &&  ((s as any).pcs_makeup ?? 0) < ((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_makeup'] + 1  &&  ((s as any).mc_inventory ?? 0)?.['cosmetics'] >= Math.min(qspUntranslated(s, "makeup[\u00003\u0000]", { location: "mirror" }), 3)) {
    (s as any).result = 1;
    return;
  }
  if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_lipbalm'] > 0  &&  ((s as any).pcs_lipbalm ?? 0) < ((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_lipbalm']  &&  ((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0) {
    (s as any).result = 1;
    return;
  }
  if (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_lashes'] > 0  &&  ((s as any).lashextensionstyle ?? 0) <= 0  &&  ((s as any).pcs_lashes ?? 0) < ((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_lashes'] + 2  &&  ((((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_lashes'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['eyelash_fake'] >= 1)  ||  (((s as any).makeup ?? 0)['routine_' + ((s as any).locArgs?.[1] ?? 0) + '_lashes'] === 2  &&  ((s as any).mc_inventory ?? 0)?.['eyelash_mink'] >= 1))) {
    (s as any).result = 1;
    return;
  }
  scene.build();
}

function enterSteam(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bathroom/mirror1.jpg');
  scene.text('<center>The mirror is heavily misted. It must be wiped or left to cool.</center>');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Wipe the mirror', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).mirror_steam = (-1);
    qspCall(s, 'stat', '');
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
    ((s as any).serv ?? {})['noaction'] = '<img ' + qspUntranslated(s, "set_imgh>", { location: "mirror" }) + ' src="images/system/icons/blank.png">';
    ((s as any).serv ?? {})['avatar'] = '<img ' + qspUntranslated(s, "set_imgh>", { location: "mirror" }) + ' src="<<func(\'$face_image\')>>">';
    if (((s as any).mirrorloc ?? 0) === 'mirror') {
      ((s as any).serv ?? {})['back'] = '<a href="exec: gt \'mirror\',\'start\'"><img src="images/system/icons/action/back.png"></a>';
    } else {
      ((s as any).serv ?? {})['back'] = '<a href="exec: gt \'mirror\',\'fin\'"><img src="images/system/icons/action/back.png"></a>';
    }
    // TODO-QSP: dynamic text: <center><table align=center cellspacing=0 cellpadding=0><tr><td align=center col...
    scene.text(`<center><table align=center cellspacing=0 cellpadding=0><tr><td align=center colspan=15><center>${((s as any).serv ?? 0)?.['avatar']}</center></td></tr><tr><td colspan=15><hr></td></tr><tr><td colspan=10></td><td>${((s as any).serv ?? 0)?.['back']}</td><td colspan=4></td></tr></table></center>`);
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
  scene.build();
}

function enterWorksRoutine(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'mirror', 'works', makeup['routine_<<ARGS[1]>>_makeup'], makeup['routine_<<ARGS[1]>>_lipbalm'], m...
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
  if (((s as any).locArgs?.[1] ?? 0) > 0  &&  ((s as any).pcs_makeup ?? 0) < ((s as any).locArgs?.[1] ?? 0) + 1) {
    if (((s as any).mc_inventory ?? 0)?.['cosmetics'] <= 0) {
      scene.text('You don\'t have any cosmetics.');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['cosmetics'] >= Math.min(qspUntranslated(s, "ARGS[1]", { location: "mirror" }), 3)) {
        if (((s as any).locArgs?.[1] ?? 0) === 1  &&  ((s as any).pcs_makeup ?? 0) < 2) {
          scene.text('You subtly apply some neutral tones, with a light application of makeup to bring out your natural beauty.');
          (s as any).minut = ((s as any).minut ?? 0) + 3;
          qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
          ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (1);
          (s as any).pcs_makeup = 2;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 2  &&  ((s as any).pcs_makeup ?? 0) < 3) {
            scene.text('You apply some mildly vibrant tones and colors of makeup to cover your minor imperfections and enhance your best features.');
            (s as any).minut = ((s as any).minut ?? 0) + 5;
            qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
            ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (2);
            (s as any).pcs_makeup = 3;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 3  &&  ((s as any).pcs_makeup ?? 0) < 4) {
              scene.text('You apply some deeper, richer shades of makeup, thick enough to cover most imperfections, while drawing attention to your eyes and lips.');
              (s as any).minut = ((s as any).minut ?? 0) + 10;
              qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
              ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (3);
              (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
              (s as any).pcs_makeup = 4;
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 5  &&  ((s as any).pcs_makeup ?? 0) < 6) {
                scene.text('You apply some bright, seductive makeup, thick enough to cover most imperfections, while drawing attention in a way only a bimbo can.');
                (s as any).minut = ((s as any).minut ?? 0) + 10;
                qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
                ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (3);
                (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
                (s as any).pcs_makeup = 6;
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 6  &&  ((s as any).pcs_makeup ?? 0) < 6) {
                  scene.text('You apply some makeup thick enough to cover most imperfections, while drawing attention in a way only a goth can.');
                  (s as any).minut = ((s as any).minut ?? 0) + 10;
                  qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
                  ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (3);
                  (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
                  (s as any).pcs_makeup = 7;
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 4  &&  ((s as any).pcs_makeup ?? 0) !== 0) {
                    scene.text('You deliberately smear cosmetics across your face in a messy, smudged pattern.');
                    (s as any).minut = ((s as any).minut ?? 0) + 5;
                    qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
                    ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (3);
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
  if (((s as any).locArgs?.[2] ?? 0) > 0) {
    qspCall(s, 'mirror', 'applyLipbalm');
  }
  if (((s as any).locArgs?.[3] ?? 0) > 0  &&  ((s as any).lashextensionstyle ?? 0) <= 0  &&  ((s as any).pcs_lashes ?? 0) < ((s as any).locArgs?.[3] ?? 0) + 2) {
    if (((s as any).locArgs?.[3] ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['eyelash_fake'] >= 1) {
      qspCall(s, 'mirror', 'applyLashesplain');
    } else {
      if (((s as any).locArgs?.[3] ?? 0) === 2  &&  ((s as any).mc_inventory ?? 0)?.['eyelash_mink'] >= 1) {
        qspCall(s, 'mirror', 'applyLashesmink');
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
    default:
      enterStart(s, scene);
      break;
  }
}

export const mirror: LocationDef = {
  name: 'mirror',
  title: 'You consider for a moment which look you want to go for.',
  region: 'other',
  description: ['You consider for a moment which look you want to go for.'],
  enter: enter,
};
