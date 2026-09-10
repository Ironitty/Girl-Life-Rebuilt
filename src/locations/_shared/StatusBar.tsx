import { useGameStore } from '../../core/store';
import { useShallow } from 'zustand/react/shallow';
import type { GameState } from '../../core/types';
import { getPanelSections } from '../../components/game/SettingsMenu';
import { getClothesImages, getTattooImage, getPiercingImage, getFaceImage } from '../../core/clothingImage';
import { useFaceImageState } from '../../core/selectors';

function StatBar({ label, value, max, color, phantom, overlay }: { label: string; value: number; max: number; color: string; phantom?: number; overlay?: { value: number; color: string } }) {
  const pct = max > 0 ? Math.min(100, (value / max) * 100) : 0;
  const phantomPct = phantom !== undefined && max > 0 ? Math.min(100, (phantom / max) * 100) : 0;
  const overlayPct = overlay && max > 0 ? Math.min(100, (overlay.value / max) * 100) : 0;
  return (
    <div>
      <div className="flex justify-between text-xs mb-0.5">
        <span className="opacity-70">{label}</span>
        <span>{Math.round(value)}</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden relative" style={{ background: 'rgba(255,255,255,0.1)' }}>
        {phantom !== undefined && phantom > value && (
          <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${phantomPct}%`, background: 'rgba(255,255,255,0.15)' }} />
        )}
        {overlay && (
          <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${overlayPct}%`, background: overlay.color, opacity: 0.4 }} />
        )}
        <div className="absolute inset-y-0 left-0 rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}

function getDescriptiveTexts(s: any): { text: string; color?: string }[] {
  const texts: { text: string; color?: string }[] = [];
  const painTotal = s.pain['total'] ?? 0;

  if (s.pcs_horny >= 75) texts.push({ text: "You can't stop thinking about sex.", color: 'text-pink-400' });
  else if (s.pcs_horny >= 50) texts.push({ text: 'A warm desire quickens your pulse.', color: 'text-pink-300' });
  else if (s.pcs_horny >= 25) texts.push({ text: 'A faint tug of want pricks at you.' });

  if (painTotal > 50) texts.push({ text: 'Sharp pain flares through your limbs.', color: 'text-red-400' });
  else if (painTotal > 25) texts.push({ text: 'A nagging pain distracts your focus.', color: 'text-orange-300' });
  else if (painTotal > 5) texts.push({ text: 'A small ache tugs at your muscles.' });

  const healthPct = s.healthmax > 0 ? (s.pcs_health / s.healthmax) * 100 : 100;
  if (healthPct < 15) texts.push({ text: 'You are in critical condition.', color: 'text-red-400' });
  else if (healthPct < 30) texts.push({ text: 'Your health falters under strain.', color: 'text-orange-300' });
  else if (healthPct < 60) texts.push({ text: 'You feel noticeably unwell.' });

  const willPct = s.willpowermax > 0 ? (s.pcs_willpwr / s.willpowermax) * 100 : 100;
  if (willPct < 20) texts.push({ text: "You are completely at others' mercy.", color: 'text-red-400' });
  else if (willPct < 40) texts.push({ text: 'Your resolve wavers under pressure.', color: 'text-orange-300' });
  else if (willPct < 60) texts.push({ text: 'Doubt creeps into your thoughts.' });

  if (s.pcs_mood < 10) texts.push({ text: 'A dark despair closes in around you.', color: 'text-red-400' });
  else if (s.pcs_mood < 25) texts.push({ text: 'A sharp melancholy tugs at your thoughts.', color: 'text-orange-300' });
  else if (s.pcs_mood < 40) texts.push({ text: 'You feel down and unmotivated.' });
  else if (s.pcs_mood < 60) texts.push({ text: 'Your mood is neutral.' });
  else if (s.pcs_mood < 80) texts.push({ text: 'You feel content and at ease.' });
  else texts.push({ text: 'You feel wonderful!', color: 'text-green-300' });

  if (s.pcs_sleep < 20) texts.push({ text: 'Your eyes burn from exhaustion.', color: 'text-red-400' });
  else if (s.pcs_sleep < 40) texts.push({ text: 'You are running on fumes.', color: 'text-orange-300' });
  else if (s.pcs_sleep < 60) texts.push({ text: 'Sleep deprivation clouds your mind.' });
  else if (s.pcs_sleep < 80) texts.push({ text: 'You could use more rest.' });

  if (s.pcs_energy < 20) texts.push({ text: 'Your stomach growls loudly.', color: 'text-orange-300' });
  else if (s.pcs_energy < 40) texts.push({ text: "You're getting hungry." });

  if (s.pcs_hydra < 20) texts.push({ text: 'Your throat is parched.', color: 'text-orange-300' });
  else if (s.pcs_hydra < 40) texts.push({ text: "You're getting thirsty." });

  if (Number(s.pcs_period['active']) === 1) texts.push({ text: 'You are on your period.' });

  if (s.sickstage > 0) texts.push({ text: `You are sick (stage ${s.sickstage}).`, color: 'text-red-300' });

  if (s.frost > 0) texts.push({ text: 'You are freezing.', color: 'text-blue-300' });

  if (s.pcs_sweat >= 20) texts.push({ text: 'You are drenched in sweat.', color: 'text-cyan-300' });

  if (s.stat['alko'] > 0) {
    const alko = s.stat['alko'];
    if (alko > 100) texts.push({ text: 'You are wasted.', color: 'text-purple-300' });
    else if (alko > 50) texts.push({ text: 'You are quite drunk.', color: 'text-purple-300' });
    else if (alko > 20) texts.push({ text: 'You are tipsy.' });
    else texts.push({ text: 'You have a slight buzz.' });
  }

  const drugVars = (s as any).drugVars ?? {};
  if (drugVars['caffeine_dose'] > 0) texts.push({ text: 'Caffeine keeps you alert.', color: 'text-yellow-300' });

  if ((s as any).hypnoWithdrawal > 0) texts.push({ text: 'Hypnotic withdrawal aches at your mind.', color: 'text-purple-300' });

  if ((s as any).hypnoSchedule === 1) texts.push({ text: 'A hypnosis session is scheduled.', color: 'text-purple-300' });

  if (s.trait_vars['body_hair_attitude'] === -2) texts.push({ text: 'Body hair makes you uncomfortable.' });

  const stds: string[] = [];
  if ((s as any).herpes === 1) stds.push('herpes');
  if ((s as any).syphilis === 1) stds.push('syphilis');
  if ((s as any).gonorrhea === 1) stds.push('gonorrhea');
  if ((s as any).yeast === 1) stds.push('yeast infection');
  if (stds.length > 0) texts.push({ text: `STD: ${stds.join(', ')}.`, color: 'text-red-300' });

  return texts;
}

function computeWeightGain(s: any): number {
  const vitalbuf = s.vitalbuf ?? 0;
  const fat = s.fat ?? 0;
  return ((fat + 10 + vitalbuf / 10) * 100) / (35 + vitalbuf / 5);
}

export default function StatusBar() {
  const faceState = useFaceImageState();
  const s = useGameStore(useShallow(st => ({
    pain: st.pain,
    pcs_horny: st.pcs_horny,
    pcs_health: st.pcs_health,
    healthmax: st.healthmax,
    pcs_willpwr: st.pcs_willpwr,
    willpowermax: st.willpowermax,
    pcs_mood: st.pcs_mood,
    pcs_sleep: st.pcs_sleep,
    pcs_energy: st.pcs_energy,
    pcs_hydra: st.pcs_hydra,
    pcs_period: st.pcs_period,
    sickstage: st.sickstage,
    frost: st.frost,
    pcs_sweat: st.pcs_sweat,
    stat: st.stat,
    trait_vars: st.trait_vars,
    pcs_inhib: st.pcs_inhib,
    pcs_stren: st.pcs_stren,
    pcs_agil: st.pcs_agil,
    pcs_vital: st.pcs_vital,
    pcs_intel: st.pcs_intel,
    pcs_sprt: st.pcs_sprt,
    pcs_react: st.pcs_react,
    pcs_chrsm: st.pcs_chrsm,
    pcs_prcptn: st.pcs_prcptn,
    start_type: st.start_type,
    pcs_magik: st.pcs_magik,
    succubusflag: st.succubusflag,
    pcs_mana: st.pcs_mana,
    manamax: st.manamax,
    pcs_stam: st.pcs_stam,
    stammax: st.stammax,
    moodVars: st.moodVars,
    arch_vars: st.arch_vars,
    pcs_faith: st.pcs_faith,
    fat: st.fat,
    vitalbuf: st.vitalbuf,
    braworntype: st.braworntype,
    brawornnumber: st.brawornnumber,
    pantyworntype: st.pantyworntype,
    pantywornnumber: st.pantywornnumber,
    clothingworntype: st.clothingworntype,
    clothingwornnumber: st.clothingwornnumber,
    shoeworntype: st.shoeworntype,
    shoewornnumber: st.shoewornnumber,
    coatworntype: st.coatworntype,
    coatwornnumber: st.coatwornnumber,
    bag: st.bag,
    currentpursetype: st.currentpursetype,
    currentpursenumber: st.currentpursenumber,
    pcs_tattoos: st.pcs_tattoos,
    pcs_piercings: st.pcs_piercings,
    succublvl: st.succublvl,
    bodyVars: st.bodyVars,
    statAlerts: st.statAlerts,
    face_style: st.face_style,
    glass: st.glass,
    pcs_eyecol: st.pcs_eyecol,
    pcs_haircol: st.pcs_haircol,
    pcs_hairlng: st.pcs_hairlng,
    pcs_hairbsh: st.pcs_hairbsh,
    drugVars: (st as any).drugVars,
    hypnoWithdrawal: (st as any).hypnoWithdrawal,
    hypnoSchedule: (st as any).hypnoSchedule,
    herpes: (st as any).herpes,
    syphilis: (st as any).syphilis,
    gonorrhea: (st as any).gonorrhea,
    yeast: (st as any).yeast,
    sucexcess: (st as any).sucexcess,
  })));
  const panel = getPanelSections();
  const painTotal = s.pain['total'] ?? 0;
  const painDamage = s.pain['damage'] ?? 0;
  const descriptiveTexts = getDescriptiveTexts(s);
  const drugVars = (s as any).drugVars ?? {};
  const weightGain = computeWeightGain(s);

  const attrBars = [
    { label: 'Inhibition', value: 100 - s.pcs_inhib, max: 100, color: 'var(--gl-accent)' },
    { label: 'Strength', value: s.pcs_stren, max: 100, color: 'var(--gl-positive)' },
    { label: 'Agility', value: s.pcs_agil, max: 100, color: 'var(--gl-positive)' },
    { label: 'Endurance', value: s.pcs_vital, max: 100, color: 'var(--gl-positive)' },
    { label: 'Intelligence', value: s.pcs_intel, max: 100, color: 'var(--gl-positive)' },
    { label: 'Spirit', value: s.pcs_sprt, max: 100, color: 'var(--gl-positive)' },
    { label: 'Reaction', value: s.pcs_react, max: 100, color: 'var(--gl-positive)' },
    { label: 'Charisma', value: s.pcs_chrsm, max: 100, color: 'var(--gl-positive)' },
    { label: 'Perception', value: s.pcs_prcptn, max: 100, color: 'var(--gl-positive)' },
  ];
  if (s.start_type['magic'] !== 'nomagic') {
    attrBars.push({ label: 'Magic', value: s.pcs_magik, max: 100, color: '#818cf8' });
  }
  if (s.start_type['magic'] !== 'nomagic' && s.succubusflag === 1) {
    attrBars.push({ label: 'Succubus Energy', value: (s as any).sucexcess ?? 0, max: 100, color: '#c084fc' });
  }

  return (
    <aside className="w-56 p-3 border-l overflow-y-auto text-sm space-y-3" style={{ background: 'var(--gl-panel)', borderColor: 'var(--gl-border)' }}>
      {panel.status && (
        <div className="space-y-1.5">
          <h3 className="font-bold text-xs uppercase tracking-wider opacity-60">Status</h3>
          <StatBar label="Arousal" value={s.pcs_horny} max={100} color="#f472b6" />
          {painTotal > 0 && <StatBar label="Pain" value={painTotal} max={100} color="var(--gl-negative)" phantom={painDamage} />}
          <StatBar label="Health" value={s.pcs_health} max={s.healthmax} color="var(--gl-negative)" />
          {s.start_type['magic'] !== 'nomagic' && <StatBar label="Mana" value={s.pcs_mana} max={s.manamax} color="#818cf8" />}
          <StatBar label="Willpower" value={s.pcs_willpwr} max={s.willpowermax} color="var(--gl-warning)" />
          <StatBar label="Stamina" value={s.pcs_stam} max={s.stammax} color="#fb923c" />
          <StatBar label="Mood" value={s.pcs_mood} max={s.moodVars.max} color="var(--gl-accent)" />
          <StatBar label="Disposition" value={s.moodVars.disp} max={100} color="var(--gl-accent)" />
          <StatBar label="Hunger" value={s.pcs_energy} max={100} color="var(--gl-positive)" />
          <StatBar label="Weight gain" value={weightGain} max={100} color="var(--gl-warning)" />
          <StatBar label="Thirst" value={s.pcs_hydra} max={100} color="#38bdf8" />
          {drugVars['caffeine_dose'] > 0 && drugVars['sleep_actual'] < 100
            ? <StatBar label="Sleep" value={s.pcs_sleep} max={100} color="#a78bfa" phantom={drugVars['sleep_actual']} />
            : <StatBar label="Sleep" value={s.pcs_sleep} max={100} color="#a78bfa" />}
          {s.arch_vars['main_active'] === 'prude' && <StatBar label="Faith" value={s.pcs_faith} max={100} color="#fbbf24" />}
        </div>
      )}

      {panel.condition && descriptiveTexts.length > 0 && (
        <div className="pt-2 border-t space-y-1" style={{ borderColor: 'var(--gl-border)' }}>
          <h3 className="font-bold text-xs uppercase tracking-wider opacity-60">Condition</h3>
          {descriptiveTexts.map((t, i) => (
            <p key={i} className={`text-xs leading-snug ${t.color ?? 'opacity-70'}`}>{t.text}</p>
          ))}
        </div>
      )}

      {panel.attributes && (
        <div className="pt-2 border-t" style={{ borderColor: 'var(--gl-border)' }}>
          <h3 className="font-bold text-xs uppercase tracking-wider opacity-60 mb-1">Attributes</h3>
          <div className="space-y-1">
            {attrBars.map((a, i) => (
              <StatBar key={i} label={a.label} value={a.value} max={a.max} color={a.color} />
            ))}
          </div>
        </div>
      )}

      {panel.clothing && (() => {
        const imgs = getClothesImages(s as unknown as GameState);
        const bra = { label: 'Bra', img: imgs.bra, desc: s.braworntype !== 'none' ? `${s.braworntype} no.${s.brawornnumber}` : 'None' };
        const panties = { label: 'Panties', img: imgs.panties || 'images/pc/body/pussy/hair/pussy.jpg', desc: s.pantyworntype !== 'none' ? `${s.pantyworntype} no.${s.pantywornnumber}` : 'None' };
        const outfit = { label: 'Outfit', img: imgs.outfit, desc: s.clothingworntype !== 'none' && s.clothingworntype !== 'nude' ? `${s.clothingworntype} no.${s.clothingwornnumber}` : s.clothingworntype === 'nude' ? 'Naked' : 'None' };
        const shoes = { label: 'Shoes', img: imgs.shoes, desc: s.shoeworntype !== 'none' ? `${s.shoeworntype} no.${s.shoewornnumber}` : 'Barefoot' };
        const coat = { label: 'Coat', img: imgs.coat, desc: s.coatworntype !== 'none' ? `${s.coatworntype} no.${s.coatwornnumber}` : 'None' };
        const purse = { label: 'Purse', img: imgs.purse, desc: s.bag > 0 ? `${s.currentpursetype} no.${s.currentpursenumber}` : 'None' };
        const render = (item: { label: string; img: string; desc: string }) => (
          <div className="text-center">
            <div className="text-[10px] opacity-60 mb-0.5">{item.label}</div>
            {item.img && <img src={item.img} alt={item.label} className="w-full rounded" style={{ maxHeight: '70px', objectFit: 'contain' }} />}
            <div className="text-[10px] opacity-50">{item.desc}</div>
          </div>
        );
        return (
          <div className="pt-2 border-t" style={{ borderColor: 'var(--gl-border)' }}>
            <h3 className="font-bold text-xs uppercase tracking-wider opacity-60 mb-1">Clothing</h3>
            <div className="grid grid-cols-2 gap-1">
              {render(bra)}
              {render(outfit)}
              {render(panties)}
              {render(shoes)}
            </div>
            <div className="grid grid-cols-2 gap-1 mt-1">
              {render(coat)}
              {render(purse)}
            </div>
          </div>
        );
      })()}

      {panel.tattoos && (() => {
        const total = Object.values(s.pcs_tattoos).reduce((a, b) => a + b, 0);
        if (total === 0) return null;
        const locNames: Record<string, string> = {
          face: 'Face', lip: 'Lip', neck: 'Neck', back: 'Back', shoulder: 'Shoulder',
          breast: 'Breast', under: 'Under', chest: 'Chest', side: 'Side', belly: 'Belly',
          arm: 'Arm', wrist: 'Wrist', hand: 'Hand', leg: 'Leg', ankle: 'Foot',
          tramp: 'Tramp', ass: 'Butt', pussy: 'Groin',
        };
        return (
          <div className="pt-2 border-t" style={{ borderColor: 'var(--gl-border)' }}>
            <h3 className="font-bold text-xs uppercase tracking-wider opacity-60 mb-1">Tattoos ({total})</h3>
            <div className="grid grid-cols-2 gap-1">
              {Object.entries(locNames).map(([key, label]) => {
                const count = s.pcs_tattoos[key] ?? 0;
                if (count === 0) return null;
                const img = getTattooImage(key, count);
                return (
                  <div key={key} className="text-center">
                    <div className="text-[10px] opacity-60 mb-0.5">{label} ({count})</div>
                    {img && <img src={img} alt={label} className="w-full rounded" style={{ maxHeight: '60px', objectFit: 'contain' }} />}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {panel.piercings && (() => {
        const total = Object.values(s.pcs_piercings).reduce((a, b) => a + b, 0);
        if (total === 0) return null;
        const locNames: Record<string, string> = {
          ears: 'Ears', nose: 'Nose', lip: 'Lip', brow: 'Brow',
          navel: 'Navel', nipples: 'Nipples', tongue: 'Tongue', pussy: 'Pussy',
        };
        return (
          <div className="pt-2 border-t" style={{ borderColor: 'var(--gl-border)' }}>
            <h3 className="font-bold text-xs uppercase tracking-wider opacity-60 mb-1">Piercings ({total})</h3>
            <div className="grid grid-cols-2 gap-1">
              {Object.entries(locNames).map(([key, label]) => {
                const count = s.pcs_piercings[key] ?? 0;
                if (count === 0) return null;
                const img = getPiercingImage(key, count);
                return (
                  <div key={key} className="text-center">
                    <div className="text-[10px] opacity-60 mb-0.5">{label} ({count})</div>
                    {img && <img src={img} alt={label} className="w-full rounded" style={{ maxHeight: '60px', objectFit: 'contain' }} />}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {panel.skills && (
        <div className="pt-2 border-t" style={{ borderColor: 'var(--gl-border)' }}>
          <h3 className="font-bold text-xs uppercase tracking-wider opacity-60 mb-1">Skills</h3>
          <p className="text-xs opacity-40 italic">No skills learned yet</p>
        </div>
      )}

      {panel.relations && (
        <div className="pt-2 border-t" style={{ borderColor: 'var(--gl-border)' }}>
          <h3 className="font-bold text-xs uppercase tracking-wider opacity-60 mb-1">Relations</h3>
          <p className="text-xs opacity-40 italic">No notable relations</p>
        </div>
      )}

      {panel.misc && (
        <div className="pt-2 border-t text-xs opacity-70" style={{ borderColor: 'var(--gl-border)' }}>
          <span className="block">Sweat: {Math.round(s.pcs_sweat)}/69</span>
          <span className="block">Fat: {s.fat}</span>
          <span className="block">Sick: {s.sickstage > 0 ? `Stage ${s.sickstage}` : 'None'}</span>
          {s.succubusflag === 1 && <span className="block">Succubus Lv{s.succublvl}</span>}
        </div>
      )}

      {panel.appearance && (
        <div className="pt-2 border-t" style={{ borderColor: 'var(--gl-border)' }}>
          <h3 className="font-bold text-xs uppercase tracking-wider opacity-60 mb-1">Body</h3>
          <img
            src={getFaceImage(faceState)}
            alt="Head"
            className="w-full rounded mb-1"
            style={{ maxHeight: '100px', objectFit: 'contain' }}
          />
          <img
            src={s.bodyVars['img'] || `images/pc/body/shape/${s.fat <= 1 ? 0 : s.fat <= 5 ? 6 : 7}.jpg`}
            alt="Body"
            className="w-full rounded"
            style={{ maxHeight: '150px', objectFit: 'contain' }}
          />
        </div>
      )}

      {/* Alerts */}
      {s.statAlerts.length > 0 && (
        <div className="pt-2 border-t space-y-1" style={{ borderColor: 'var(--gl-border)' }}>
          <h3 className="font-bold text-xs uppercase tracking-wider opacity-60">Alerts</h3>
          {s.statAlerts.map((alert, i) => (
            <p key={i} className="text-xs px-2 py-1 rounded" style={{ background: 'rgba(239,68,68,0.15)', color: 'var(--gl-negative)' }}>
              {alert}
            </p>
          ))}
        </div>
      )}
    </aside>
  );
}
