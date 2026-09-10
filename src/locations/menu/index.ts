import { goto } from '../../core/location';
import type { GameState, LocationDef } from '../../core/types';
import { SceneBuilder } from '../../core/scene';
import { useGameStore } from '../../core/store';
import { toDate } from '../../core/time';
import { getClothesImages, getTattooImage, getPiercingImage } from '../../core/clothingImage';

function backAction(s: GameState) {
  return [{ label: '← Back', goto: [s.prevLoc || 'map_view', s.prevArg || ''] as [string, string] }];
}

function tabBar(tabs: [string, string][], active: string, loc: string) {
  let html = `<div class="flex gap-2 flex-wrap mb-4">`;
  for (const [label, id] of tabs) {
    const style = id === active
      ? 'background:var(--gl-accent);color:#fff;border:1px solid var(--gl-accent)'
      : 'background:var(--gl-panel);border:1px solid var(--gl-border)';
    html += `<a href="#" data-goto="${loc}:${id}" class="px-3 py-1 rounded text-sm" style="${style}">${label}</a>`;
  }
  html += `</div>`;
  return html;
}

// ─── Character ───────────────────────────────────────────────────────
const charTabs: [string, string][] = [
  ['Character', 'description'],
  ['Skills', 'skills'],
  ['Statistics', 'stats'],
  ['Pain', 'pain'],
  ['Archetypes', 'archetypes'],
  ['Traits', 'traits'],
  ['Renown', 'reputation'],
  ['Magic', 'magic'],
];

function characterEnter(s: GameState, scene: SceneBuilder) {
  const tab = s.locArg || 'description';
  const dv = toDate(s.daystart);
  const dobStr = `${String(s.birthday).padStart(2, '0')}.${String(s.birthmonth).padStart(2, '0')}.${s.birthyear}`;
  const height = (s as any).pcs_hgt ?? 165;
  const weight = (s as any).bodyVars?.['desc'] ?? 'slim';

  let html = `<h1>Character</h1><hr/>`;
  html += tabBar(charTabs, tab, 'menu_character');

  switch (tab) {
    case 'description':
      html += `<p>Your name is <b>${s.pcs_firstname} ${s.pcs_lastname}</b>.</p>`;
      if (s.pcs_nickname) html += `<p>Your friends call you <b>${s.pcs_nickname}</b>.</p>`;
      html += `<p>You are <b>${s.age}</b> years old${s.vidage !== s.age ? `, but you appear to be ${s.vidage}` : ''}.</p>`;
      html += `<p>Your date of birth is <b>${dobStr}</b>.</p>`;
      html += `<p>You are <b>${height}cm</b> tall and ${weight}.</p>`;
      html += `<p>Current date: <b>${dv['weekName']} ${dv['day']}${dv['suffix']} ${dv['monthName']} ${dv['year']}</b></p>`;
      html += `<h2 class="mt-4">Attributes</h2>`;
      const descAttrs: [string, number, number][] = [
        ['Strength', s.pcs_stren, 10],
        ['Agility', s.pcs_agil, 10],
        ['Endurance', s.pcs_vital, 10],
        ['Intelligence', s.pcs_intel, 10],
        ['Spirit', s.pcs_sprt, 10],
        ['Reaction', s.pcs_react, 10],
        ['Charisma', s.pcs_chrsm, 10],
        ['Perception', s.pcs_prcptn, 10],
        ['Inhibition', 100 - s.pcs_inhib, 100],
        ['Magic', s.pcs_magik, 10],
      ];
      html += `<table class="w-full text-sm mt-2">`;
      for (const [name, val, max] of descAttrs) {
        const pct = Math.min(100, (val / max) * 100);
        html += `<tr><td class="py-1">${name}</td><td class="py-1 text-right w-10">${val}</td><td class="py-1 pl-3"><div class="h-2 rounded bg-gray-700"><div class="h-2 rounded bg-blue-500" style="width:${pct}%"></div></div></td></tr>`;
      }
      html += `</table>`;
      break;
    case 'skills': {
      html += `<h2>Skills</h2>`;
      const sk = s.skill_levels;
      const entries = Object.entries(sk).filter(([k]) => k.endsWith('_lvl'));
      if (entries.length === 0) {
        html += `<p class="opacity-60">No skills learned yet.</p>`;
      } else {
        html += `<table class="w-full text-sm">`;
        html += `<tr class="border-b"><td class="py-1 font-bold">Skill</td><td class="py-1 font-bold text-right">Level</td></tr>`;
        for (const [key, val] of entries.sort((a, b) => b[1] - a[1])) {
          const name = key.replace('_lvl', '').replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase());
          html += `<tr class="border-b border-gray-700"><td class="py-1">${name}</td><td class="py-1 text-right">${val}</td></tr>`;
        }
        html += `</table>`;
      }
      break;
    }
    case 'stats': {
      html += `<h2>Statistics</h2><table class="w-full text-sm">`;
      const attrs: [string, number, number][] = [
        ['Strength', s.pcs_stren, 10],
        ['Agility', s.pcs_agil, 10],
        ['Endurance', s.pcs_vital, 10],
        ['Intelligence', s.pcs_intel, 10],
        ['Spirit', s.pcs_sprt, 10],
        ['Reaction', s.pcs_react, 10],
        ['Charisma', s.pcs_chrsm, 10],
        ['Perception', s.pcs_prcptn, 10],
        ['Inhibition', 100 - s.pcs_inhib, 100],
        ['Magic', s.pcs_magik, 10],
      ];
      for (const [name, val, max] of attrs) {
        const pct = Math.min(100, (val / max) * 100);
        html += `<tr><td class="py-1">${name}</td><td class="py-1 text-right">${val}</td><td class="py-1 w-32"><div class="h-2 rounded bg-gray-700"><div class="h-2 rounded bg-blue-500" style="width:${pct}%"></div></div></td></tr>`;
      }
      html += `</table>`;
      break;
    }
    case 'pain': {
      html += `<h2>Pain</h2>`;
      const pain = (s as any).pain ?? {};
      const totalPain = Object.values(pain).reduce((a: number, b) => a + (b as number), 0);
      html += `<p>Total pain: <b>${totalPain}</b></p>`;
      if (totalPain === 0) html += `<p class="opacity-60">You feel no pain.</p>`;
      break;
    }
    case 'archetypes': {
      html += `<h2>Archetypes</h2>`;
      const av = s.arch_vars;
      const archNames = ['bimbo', 'preppy', 'prude', 'punk', 'goth'];
      const mainActive = av['main_active'] as string || '';
      const hasAny = archNames.some(a => (av[a + '_points'] as number) > 0);
      if (!hasAny) {
        html += `<p class="opacity-60">No archetypes unlocked yet.</p>`;
      } else {
        html += `<table class="w-full text-sm">`;
        html += `<tr class="border-b"><td class="py-1 font-bold">Archetype</td><td class="py-1 font-bold text-right">Points</td><td class="py-1 font-bold">Status</td></tr>`;
        for (const a of archNames) {
          const pts = (av[a + '_points'] as number) || 0;
          const status = a === mainActive ? '<span class="text-green-300">Active</span>' : pts >= 50000 ? '<span class="text-yellow-300">Unlocked</span>' : '';
          html += `<tr class="border-b border-gray-700"><td class="py-1 capitalize">${a}</td><td class="py-1 text-right">${pts.toLocaleString()}</td><td class="py-1">${status}</td></tr>`;
        }
        html += `</table>`;
      }
      break;
    }
    case 'traits': {
      html += `<h2>Traits</h2>`;
      const tv = s.trait_vars;
      const traitKeys = Object.keys(tv).filter(k => !k.endsWith('_exp'));
      if (traitKeys.length === 0) {
        html += `<p class="opacity-60">No traits discovered yet.</p>`;
      } else {
        html += `<table class="w-full text-sm">`;
        html += `<tr class="border-b"><td class="py-1 font-bold">Trait</td><td class="py-1 font-bold text-right">Level</td><td class="py-1 font-bold text-right">Exp</td></tr>`;
        for (const t of traitKeys.sort()) {
          const val = tv[t];
          const exp = tv[t + '_exp'] || 0;
          const valClass = val > 0 ? 'text-green-300' : val < 0 ? 'text-red-300' : 'opacity-60';
          html += `<tr class="border-b border-gray-700"><td class="py-1">${t.replace(/_/g, ' ')}</td><td class="py-1 text-right ${valClass}">${val > 0 ? '+' : ''}${val}</td><td class="py-1 text-right opacity-60">${exp}</td></tr>`;
        }
        html += `</table>`;
      }
      break;
    }
    case 'reputation': {
      html += `<h2>Renown</h2>`;
      const fame = s.fame;
      const entries = Object.entries(fame).filter(([, v]) => v > 0);
      if (entries.length === 0) {
        html += `<p class="opacity-60">No renown yet.</p>`;
      } else {
        const regions: Record<string, string> = { pav: 'Pavlovsk', city: 'City', pushkin: 'Pushkin', gad: 'Gad' };
        html += `<table class="w-full text-sm">`;
        html += `<tr class="border-b"><td class="py-1 font-bold">Region</td><td class="py-1 font-bold">Category</td><td class="py-1 font-bold text-right">Renown</td></tr>`;
        for (const [key, val] of entries.sort((a, b) => b[1] - a[1])) {
          const [reg, cat] = key.split('_');
          html += `<tr class="border-b border-gray-700"><td class="py-1">${regions[reg] || reg}</td><td class="py-1 capitalize">${cat}</td><td class="py-1 text-right">${val}</td></tr>`;
        }
        html += `</table>`;
      }
      break;
    }
    case 'magic': {
      html += `<h2>Magic</h2>`;
      if (s.start_type['magic'] === 'nomagic') {
        html += `<p class="opacity-60">You are not attuned to magic.</p>`;
      } else {
        html += `<p>Mana: <b>${s.pcs_mana}/${s.manamax}</b></p>`;
        html += `<p>Magic attribute: ${s.pcs_magik}</p>`;
        const spellGroups: [string, string[]][] = [
          ['Combat', s.combatSpells],
          ['Non-Combat', s.nonComSpells],
          ['Story', s.storySpells],
        ];
        const totalSpells = s.combatSpells.length + s.nonComSpells.length + s.storySpells.length;
        if (totalSpells === 0) {
          html += `<p class="opacity-60 mt-2">No spells learned yet.</p>`;
        } else {
          for (const [group, spells] of spellGroups) {
            if (spells.length === 0) continue;
            html += `<h3 class="mt-3">${group} (${spells.length})</h3>`;
            html += `<div class="flex flex-wrap gap-2 mt-1">`;
            for (const sp of spells) {
              html += `<span class="px-2 py-0.5 rounded text-xs" style="background:var(--gl-panel);border:1px solid var(--gl-border)">${sp}</span>`;
            }
            html += `</div>`;
          }
        }
      }
      break;
    }
    default:
      html += `<p>Character</p>`;
  }

  scene.mainText = html;
  scene.curActs = backAction(s);
  scene.backimage = '';
}

// ─── Looks ───────────────────────────────────────────────────────────
const looksTabs: [string, string][] = [
  ['Face', 'face'],
  ['Body', 'body'],
  ['Clothes', 'clothes'],
  ['Tattoos', 'tattoos'],
  ['Piercings', 'piercing'],
];

function getFaceImagePath(s: import('../../core/clothingImage').FaceImageState): string {
  const glasses = s.glass >= 1 ? 'stylish' : 'noglass';
  const eyeMap: Record<number, string> = { 0: 'blue', 1: 'blue', 2: 'green', 3: 'blue' };
  const eye = eyeMap[s.pcs_eyecol] ?? 'blue';
  const hairColMap: Record<number, string> = { 0: 'black', 1: 'brunette', 2: 'red', 3: 'blonde' };
  const hairCol = hairColMap[s.pcs_haircol] ?? 'brunette';
  let hairLen: string;
  if (s.pcs_hairlng > 260) hairLen = 'long';
  else if (s.pcs_hairlng > 80) hairLen = 'medium';
  else if (s.pcs_hairlng > 30) hairLen = 'short';
  else hairLen = 'very_short';
  let style: string;
  if (s.pcs_hairbsh <= 0) style = 'messy';
  else if (s.pcs_hairlng > 80) {
    if (s.hbraids > 0) style = 'braids';
    else if (s.hpigtail > 0) style = 'pigtails';
    else if (s.curly > 0 && s.hbangs > 0) style = 'curly';
    else if (s.curly > 0) style = 'curly';
    else if (s.hbangs > 0) style = 'bangs';
    else if (s.hpingripw > 0) style = 'buns';
    else if (s.hscrunchw > 0) style = 'scrunch';
    else style = 'normal';
  } else if (s.pcs_hairlng > 30) {
    if (s.hbangs > 0) style = 'bangs';
    else if (s.curly > 0) style = 'curly';
    else style = 'normal';
  } else style = 'normal';
  let makeup: string;
  if (s.pcs_makeup === 1) makeup = 'no_makeup';
  else if (s.pcs_makeup >= 2 && s.pcs_makeup <= 6) makeup = 'vibrant';
  else makeup = 'smeared';
  const hasCum = (s.cumloc[11] ?? 0) === 1;
  const cum = hasCum ? 'decent' : 'no_cum';
  return `images/pc/body/head/${glasses}/${eye}/${hairCol}/${hairLen}/${style}/${makeup}_${cum}.jpg`;
}

function getHairDesc(s: GameState): string {
  const colMap: Record<number, string> = { 0: 'Black', 1: 'Brown', 2: 'Red', 3: 'Blonde' };
  const col = colMap[s.pcs_haircol] ?? 'Brown';
  let len: string;
  if (s.pcs_hairlng > 400) len = 'very long';
  else if (s.pcs_hairlng > 260) len = 'long';
  else if (s.pcs_hairlng > 160) len = 'medium-long';
  else if (s.pcs_hairlng > 80) len = 'medium';
  else if (s.pcs_hairlng > 30) len = 'short';
  else len = 'very short';
  let style = '';
  if (s.pcs_hairbsh <= 0) style = ' messy';
  else if (s.hbraids > 0) style = ' in braids';
  else if (s.hpigtail > 0) style = ' in pigtails';
  else if (s.curly > 0) style = ' and curly';
  else if (s.hbangs > 0) style = ' with bangs';
  else if (s.hpingripw > 0) style = ' in a bun';
  else if (s.hscrunchw > 0) style = ' in a ponytail';
  return `${col} hair, ${len}${style}`;
}

function getEyeDesc(s: GameState): string {
  const colMap: Record<number, string> = { 0: 'hazel', 1: 'grey', 2: 'green', 3: 'blue' };
  let desc = `${colMap[s.pcs_eyecol] ?? 'blue'} eyes`;
  if (s.pcs_eyesize > 2) desc += ', large';
  else if (s.pcs_eyesize === 2) desc += ', medium';
  if (s.pcs_lashes > 1) desc += ', long lashes';
  else if (s.pcs_lashes === 1) desc += ', normal lashes';
  return desc;
}

function getMakeupDesc(s: GameState): string {
  const map: Record<number, string> = {
    1: 'no makeup', 2: 'light makeup', 3: 'vibrant makeup',
    4: 'heavy makeup', 5: 'professional makeup', 6: 'bimbo makeup', 7: 'smeared makeup',
  };
  return map[s.pcs_makeup] ?? 'no makeup';
}

function looksEnter(s: GameState, scene: SceneBuilder) {
  const tab = s.locArg || 'face';

  let html = `<h1>Looks</h1><hr/>`;
  html += tabBar(looksTabs, tab, 'menu_looks');

  switch (tab) {
    case 'face': {
      const faceImg = getFaceImagePath(s);
      html += `<div class="flex gap-6 items-start">`;
      html += `<div class="flex-shrink-0"><img src="${faceImg}" alt="Face" class="w-56 rounded-lg" style="border:1px solid var(--gl-border)"/></div>`;
      html += `<div class="space-y-1">`;
      html += `<p>${getHairDesc(s)}.</p>`;
      html += `<p>${getEyeDesc(s)}.</p>`;
      if (s.glass > 0) html += `<p>Wearing ${s.glass >= 2 ? 'stylish' : ''} glasses.</p>`;
      html += `<p>${getMakeupDesc(s)}.</p>`;
      const lipDesc = s.pcs_lip <= 0 ? 'thin lips' : s.pcs_lip <= 2 ? 'average lips' : 'full lips';
      html += `<p>${lipDesc.charAt(0).toUpperCase() + lipDesc.slice(1)}.</p>`;
      const skinDesc = s.pcs_skin >= 70 ? 'flawless skin' : s.pcs_skin >= 40 ? 'clear skin' : 'skin with some blemishes';
      html += `<p>${skinDesc.charAt(0).toUpperCase() + skinDesc.slice(1)}.</p>`;
      if (s.pcs_teeth > 0) html += `<p>Bad teeth (${s.pcs_teeth}).</p>`;
      else if (s.pcs_teeth === 0) html += `<p>Normal teeth.</p>`;
      else html += `<p>Braces.</p>`;
      html += `</div></div>`;
      break;
    }
    case 'body': {
      const fat = Math.min(8, Math.max(0, s.fat));
      const bodyImg = s.bodyVars['img'] || `images/pc/body/shape/${fat <= 1 ? 0 : fat <= 5 ? 6 : 7}.jpg`;
      const hgt = (s as any).pcs_hgt ?? 165;
      const desc = s.bodyVars['desc'] ?? 'slim';
      html += `<div class="flex gap-6 items-start">`;
      html += `<div class="flex-shrink-0"><img src="${bodyImg}" alt="Body" class="w-56 rounded-lg" style="border:1px solid var(--gl-border)"/></div>`;
      html += `<div class="space-y-1">`;
      html += `<p>You are <b>${hgt}cm</b> tall and <b>${desc}</b>.</p>`;
      html += `<p>BMI: ${s.pcs_bmi.toFixed(1)}</p>`;
      html += `<p>Body shape level: ${s.fat}</p>`;
      html += `<p>Strength: ${s.pcs_stren} (buf ${s.strenbuf})</p>`;
      html += `<p>Agility: ${s.pcs_agil}</p>`;
      html += `<p>Vitality: ${s.pcs_vital}</p>`;
      html += `<hr/>`;
      html += `<p class="text-lg"><b>Appearance: ${s.pcs_apprnc.toFixed(0)}</b></p>`;
      html += `<p>Hot category: ${s.pcs_hotcat}/10</p>`;
      html += `<p class="opacity-60 text-xs">Base: ${s.pcs_apprncbase.toFixed(0)}</p>`;
      html += `</div></div>`;
      break;
    }
    case 'clothes': {
      const imgs = getClothesImages(s);
      const imgH = 150;
      html += `<div class="grid grid-cols-3 gap-4" style="gap:${imgH / 25}px">`;

      const cells: { label: string; img: string; desc: string; tall?: boolean }[] = [];

      cells.push({
        label: 'Bra',
        img: imgs.bra,
        desc: s.braworntype !== 'none' ? `${s.braworntype} no.${s.brawornnumber}` : 'Not wearing a bra',
      });

      cells.push({
        label: 'Outfit',
        img: imgs.outfit,
        desc: s.clothingworntype !== 'none' && s.clothingworntype !== 'nude'
          ? `${s.clothingworntype} no.${s.clothingwornnumber}`
          : s.clothingworntype === 'nude' ? 'Naked' : 'Nothing',
        tall: true,
      });

      cells.push({
        label: 'Coat',
        img: imgs.coat,
        desc: s.coatworntype !== 'none' ? `${s.coatworntype} no.${s.coatwornnumber}` : 'No coat',
        tall: true,
      });

      cells.push({
        label: 'Panties',
        img: imgs.panties || 'images/pc/body/pussy/hair/pussy.jpg',
        desc: s.pantyworntype !== 'none' ? `${s.pantyworntype} no.${s.pantywornnumber}` : 'No panties',
      });

      cells.push({
        label: 'Shoes',
        img: imgs.shoes,
        desc: s.shoeworntype !== 'none' ? `${s.shoeworntype} no.${s.shoewornnumber}` : 'Barefoot',
      });

      cells.push({
        label: 'Purse',
        img: imgs.purse,
        desc: s.bag > 0 ? `${s.currentpursetype} no.${s.currentpursenumber}` : 'No purse',
      });

      for (const cell of cells) {
        const h = cell.tall ? imgH * 2 : imgH;
        html += `<div class="flex flex-col items-center text-center">`;
        html += `<div class="text-sm font-bold opacity-80 mb-1">${cell.label}</div>`;
        if (cell.img) {
          html += `<img src="${cell.img}" alt="${cell.label}" style="height:${h}px" class="object-contain rounded-lg" style="border:1px solid var(--gl-border)"/>`;
        }
        html += `<div class="text-xs opacity-60 mt-1">${cell.desc}</div>`;
        html += `</div>`;
      }

      html += `</div>`;
      html += `<div class="mt-3 text-sm space-y-1">`;
      html += `<p>Outfit: thinness ${s.PCloThinness}/6, top cut ${s.PXCloTopCut}/4, bottom length ${s.PXCloBottomShortness}/6</p>`;
      html += `<p>Dirt level: ${s.PCloDirt} (0=clean, 1440=dirty)</p>`;
      html += `</div>`;
      break;
    }
    case 'tattoos': {
      const total = Object.values(s.pcs_tattoos).reduce((a, b) => a + b, 0);
      if (total === 0) {
        html += `<p class="opacity-60">You have a pristine body. Not in terms of debauchery, but in terms of tattoos.</p>`;
      } else {
        const locNames: Record<string, string> = {
          face: 'Face', lip: 'Lip', neck: 'Neck', back: 'Back', shoulder: 'Shoulder',
          breast: 'Breast', under: 'Under Breast', chest: 'Chest', side: 'Side', belly: 'Belly',
          arm: 'Arm', wrist: 'Wrist', hand: 'Hand', leg: 'Leg', ankle: 'Foot',
          tramp: 'Tramp Stamp', ass: 'Butt', pussy: 'Groin',
        };
        html += `<div class="grid grid-cols-2 md:grid-cols-3 gap-4">`;
        for (const [key, label] of Object.entries(locNames)) {
          const count = s.pcs_tattoos[key] ?? 0;
          if (count > 0) {
            const img = getTattooImage(key, count);
            html += `<div class="text-center" style="border:1px solid var(--gl-border);border-radius:8px;padding:8px">`;
            html += `<div class="text-xs opacity-70 mb-2">${label} (${count})</div>`;
            if (img) html += `<img src="${img}" alt="${label}" style="max-height:180px;margin:0 auto;display:block" />`;
            html += `</div>`;
          }
        }
        html += `</div>`;
        html += `<p class="mt-3">Total: <b>${total}</b> tattoos</p>`;
      }
      break;
    }
    case 'piercing': {
      const total = Object.values(s.pcs_piercings).reduce((a, b) => a + b, 0);
      if (total === 0) {
        html += `<p class="opacity-60">No piercings yet.</p>`;
      } else {
        const locNames: Record<string, string> = {
          ears: 'Ears', nose: 'Nose', lip: 'Lip', brow: 'Brow',
          navel: 'Navel', nipples: 'Nipples', tongue: 'Tongue', pussy: 'Pussy',
        };
        html += `<div class="grid grid-cols-2 md:grid-cols-4 gap-4">`;
        for (const [key, label] of Object.entries(locNames)) {
          const count = s.pcs_piercings[key] ?? 0;
          if (count > 0) {
            const img = getPiercingImage(key, count);
            html += `<div class="text-center" style="border:1px solid var(--gl-border);border-radius:8px;padding:8px">`;
            html += `<div class="text-xs opacity-70 mb-2">${label} (${count})</div>`;
            if (img) html += `<img src="${img}" alt="${label}" style="max-height:180px;margin:0 auto;display:block" />`;
            html += `</div>`;
          }
        }
        html += `</div>`;
        html += `<p class="mt-3">Total: <b>${total}</b> piercings</p>`;
      }
      break;
    }
    default:
      html += `<p>Looks</p>`;
  }

  scene.mainText = html;
  scene.curActs = backAction(s);
  scene.backimage = '';
}

// ─── Purse ───────────────────────────────────────────────────────────
function purseEnter(s: GameState, scene: SceneBuilder) {
  const inv = (s as any).mc_inventory ?? {};
  let html = `<h1>Purse</h1><hr/>`;

  const items: [string, number | undefined, string][] = [
    ['Wet wipes', inv['makeup_wipes'], 'For cleaning up.'],
    ['Painkillers', inv['painkillers'], 'Reduce pain.'],
    ['Mouthwash', inv['mouthwash'], 'Freshen breath.'],
    ['Deodorant', inv['deodorant'], 'Stay fresh.'],
    ['Travel mirror', inv['travel_mirror'], 'Check your appearance.'],
    ['Portable makeup', inv['travel_makeup'], 'Touch up.'],
    ['Lip balm', inv['lipbalm'], 'Moisturize lips.'],
    ['Comb', inv['comb'], 'Fix your hair.'],
    ['Scrunchies', inv['scrunchies'], 'Hair accessories.'],
  ];

  const hasItems = items.some(([, v]) => (v ?? 0) > 0);
  if (!hasItems) {
    html += `<p class="opacity-60">Your purse is empty.</p>`;
  } else {
    html += `<table class="w-full text-sm">`;
    html += `<tr class="border-b"><td class="py-2 font-bold">Item</td><td class="py-2 font-bold text-right">Qty</td><td class="py-2 font-bold">Description</td></tr>`;
    for (const [name, qty, desc] of items) {
      if ((qty ?? 0) > 0) {
        html += `<tr class="border-b border-gray-700"><td class="py-2">${name}</td><td class="py-2 text-right">${qty}</td><td class="py-2 opacity-70">${desc}</td></tr>`;
      }
    }
    html += `</table>`;
  }

  html += `<hr/><p>Money on hand: <b>₽${s.money.toLocaleString()}</b></p>`;

  scene.mainText = html;
  scene.curActs = backAction(s);
  scene.backimage = '';
}

// ─── Phone ───────────────────────────────────────────────────────────
const phoneApps: [string, string, string][] = [
  ['Camera', 'camera', 'Take a selfie'],
  ['Calendar', 'calendar', 'View schedule'],
  ['Pictures', 'pictures', 'Photo album'],
  ['Media', 'media', 'Music player'],
  ['Notebook', 'notebook', 'Notes & reminders'],
  ['Weather', 'weather', 'Weather forecast'],
  ['Contacts', 'contacts', 'Contact list'],
  ['SMS', 'sms', 'Messages'],
  ['Megaphone', 'megafon', 'Local announcements'],
];

function phoneEnter(s: GameState, scene: SceneBuilder) {
  const raw = s.locArg || 'menu';
  const sub = raw === 'Phone_menu' ? 'menu' : raw;
  const tel = (s as any).telefon ?? {};
  const unread = tel['UnreadSMS'] ?? 0;
  const dv = toDate(s.daystart);

  let html = `<h1>Phone</h1><hr/>`;

  if (sub === 'menu') {
    html += `<div class="grid grid-cols-3 gap-4 max-w-md">`;
    for (const [name, id, desc] of phoneApps) {
      const label = id === 'sms' && unread > 0 ? `SMS (${unread})` : name;
      html += `<a href="#" data-goto="telefon:${id}" class="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-white/5" title="${desc}">`;
      html += `<div class="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style="background:rgba(255,255,255,0.1)">${name[0]}</div>`;
      html += `<span class="text-xs opacity-70">${label}</span>`;
      html += `</a>`;
    }
    html += `</div>`;
  } else {
    const app = phoneApps.find(a => a[1] === sub);
    const appName = app?.[0] ?? sub;
    html += `<a href="#" data-goto="telefon:menu" class="text-sm opacity-70 hover:opacity-100">← Phone Menu</a>`;
    html += `<h2 class="mt-3">${appName}</h2>`;

    switch (sub) {
      case 'camera':
        html += `<p class="opacity-60 mt-2">Camera ready. (Selfie functionality coming soon.)</p>`;
        break;
      case 'calendar':
        html += `<p class="mt-2">Today: <b>${dv['weekName']} ${dv['day']}${dv['suffix']} ${dv['monthName']} ${dv['year']}</b></p>`;
        html += `<p>Week ${s.week} of the year.</p>`;
        if (s.holyday) html += `<p class="text-yellow-300">Holiday: ${s.holyday}</p>`;
        break;
      case 'pictures':
        html += `<p class="opacity-60 mt-2">No photos yet.</p>`;
        break;
      case 'media':
        html += `<p class="opacity-60 mt-2">No media files.</p>`;
        break;
      case 'notebook':
        html += `<p class="opacity-60 mt-2">No notes or reminders.</p>`;
        break;
      case 'weather':
        html += `<p class="mt-2">Today: ${(s as any).weather === 0 ? '☀️ Sunny' : (s as any).weather === 1 ? '⛅ Cloudy' : (s as any).weather === 2 ? '🌧️ Rain' : '❄️ Snow'}</p>`;
        html += `<p>Temperature: ${s.temper}°C</p>`;
        break;
      case 'contacts':
        html += `<p class="opacity-60 mt-2">No saved contacts yet.</p>`;
        break;
      case 'sms':
        if (unread > 0) html += `<p class="text-green-300 mt-2">${unread} unread message${unread > 1 ? 's' : ''}.</p>`;
        else html += `<p class="opacity-60 mt-2">No messages.</p>`;
        break;
      case 'megafon':
        html += `<p class="opacity-60 mt-2">No local announcements.</p>`;
        break;
      default:
        html += `<p class="opacity-60 mt-2">Coming soon...</p>`;
    }
  }

  scene.mainText = html;
  scene.curActs = backAction(s);
  scene.backimage = '';
}

// ─── Journal ─────────────────────────────────────────────────────────
function getJournalTabs(s: GameState): [string, string][] {
  const hasMagic = s.start_type['magic'] !== 'nomagic';
  const tabs: [string, string][] = [];
  if (hasMagic) tabs.push(['Magic', 'magic']);
  tabs.push(
    ['Calendar', 'calendar'],
    ['Housing', 'housing'],
    ['Work', 'work'],
    ['Quests', 'quests'],
    ['Relations', 'relations'],
    ['Info', 'info'],
    ['Notes', 'notes'],
  );
  return tabs;
}

function journalEnter(s: GameState, scene: SceneBuilder) {
  const tab = s.locArg && s.locArg !== 'records' ? s.locArg : 'calendar';
  const dv = toDate(s.daystart);
  const tabs = getJournalTabs(s);

  let html = `<h1>Journal</h1><hr/>`;
  html += tabBar(tabs, tab, 'journal');

  switch (tab) {
    case 'calendar':
      html += `<h2>Calendar</h2>`;
      html += `<p>Today: <b>${dv['weekName']} ${dv['day']}${dv['suffix']} ${dv['monthName']} ${dv['year']}</b></p>`;
      html += `<p>Week ${s.week} of the year.</p>`;
      if (s.holyday) html += `<p class="text-yellow-300">Holiday: ${s.holyday}</p>`;
      break;
    case 'magic':
      html += `<h2>Spellbook</h2>`;
      html += `<p>Mana: ${s.pcs_mana}/${s.manamax}</p>`;
      html += `<p>Magic attribute: ${s.pcs_magik}</p>`;
      html += `<p class="opacity-60 mt-2">No spells learned yet.</p>`;
      break;
    case 'housing':
      html += `<h2>Housing</h2>`;
      html += `<p class="opacity-60">No housing information yet.</p>`;
      break;
    case 'work':
      html += `<h2>Work</h2>`;
      html += `<p class="opacity-60">Not currently employed.</p>`;
      break;
    case 'quests':
      html += `<h2>Quests</h2>`;
      html += `<p class="opacity-60">No active quests.</p>`;
      break;
    case 'relations':
      html += `<h2>Relations</h2>`;
      html += `<p class="opacity-60">No notable relations yet.</p>`;
      break;
    case 'info':
      html += `<h2>Game Information</h2>`;
      html += `<p>Day: ${dv['day']}${dv['suffix']} ${dv['monthName']} ${dv['year']}</p>`;
      html += `<p>Week: ${s.week}</p>`;
      html += `<p>Location: ${s.loc}</p>`;
      break;
    case 'notes':
      html += `<h2>Notes</h2>`;
      html += `<p class="opacity-60">No notes yet.</p>`;
      break;
    default:
      html += `<p>Journal</p>`;
  }

  scene.mainText = html;
  scene.curActs = backAction(s);
  scene.backimage = '';
}

// ─── Pass Time (Clock) ───────────────────────────────────────────────
function clockEnter(s: GameState, scene: SceneBuilder) {
  const hour = Math.floor((s.totminut % 1440) / 60);
  const min = s.totminut % 60;
  const timeStr = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;

  let html = `<h1>Pass Time</h1><hr/>`;
  html += `<p>Current time: <b>${timeStr}</b></p>`;
  html += `<p class="opacity-70 mt-2">Choose how long to wait:</p>`;

  const acts: { label: string; goto: [string, string] }[] = [];
  for (const mins of [15, 30, 60, 120]) {
    const label = mins < 60 ? `${mins} minutes` : mins === 60 ? '1 hour' : '2 hours';
    acts.push({ label: `Wait ${label}`, goto: ['clock_wait', String(mins)] });
  }
  acts.push({ label: '← Back', goto: [s.prevLoc || 'map_view', s.prevArg || ''] });

  scene.mainText = html;
  scene.curActs = acts;
  scene.backimage = '';
}

function clockWaitEnter(s: GameState, _scene: SceneBuilder) {
  const mins = parseInt(s.locArg) || 15;
  const store = useGameStore.getState();
  store.doAdvanceTime(mins);
  goto(s, s.prevLoc || 'map_view', s.prevArg || '');
}

// ─── Registration ────────────────────────────────────────────────────
export const locations: LocationDef[] = [
  { name: 'menu_character', title: 'Character', enter: characterEnter },
  { name: 'menu_looks', title: 'Looks', enter: looksEnter },
  { name: 'din_bad', title: 'Purse', enter: purseEnter },
  { name: 'telefon', title: 'Phone', enter: phoneEnter },
  { name: 'journal', title: 'Journal', enter: journalEnter },
  { name: 'obj_din', title: 'Journal', enter: (s: GameState, scene: SceneBuilder) => {
    if (s.locArg === 'wait') clockEnter(s, scene);
    else journalEnter(s, scene);
  }},
  { name: 'clock_wait', title: 'Waiting...', enter: clockWaitEnter },
];
