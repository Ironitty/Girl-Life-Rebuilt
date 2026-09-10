import { useState, useEffect, useRef } from 'react';
import SaveMenu from './SaveMenu';
import SettingsMenu from './SettingsMenu';
import { useGameStore, initialState } from '../../core/store';
import { getRegisteredLocations } from '../../core/location';
import { playMusic, stopMusic } from '../../core/audio';

const SPLASHES = Array.from({ length: 30 }, (_, i) => `images/system/1_openings/splashes/splash${i + 1}.jpg`);
const FIRST_NAMES = ['Anna', 'Maria', 'Elena', 'Olga', 'Katherine', 'Sofia', 'Victoria', 'Natalia', 'Irina', 'Tatiana'];
const LAST_NAMES = ['Ivanova', 'Petrova', 'Smirnova', 'Kuznetsova', 'Volkova', 'Sokolova', 'Pavlova', 'Lebedeva', 'Semenova', 'Novikova'];

export default function TitleScreen({ onStart, onQuickStart }: { onStart: () => void; onQuickStart: () => void }) {
  const [showSave, setShowSave] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [musicOn, setMusicOn] = useState(true);
  const splash = SPLASHES[Math.floor(Math.random() * SPLASHES.length)];
  const doGoto = useGameStore((s) => s.doGoto);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => { rootRef.current?.focus(); }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!e.shiftKey || (e.key !== 'q' && e.key !== 'Q')) return;
    e.preventDefault();
    const store = useGameStore.getState();
    const locs = getRegisteredLocations().filter(n => n !== 'start' && n !== 'map_view');
    const loc = locs[Math.floor(Math.random() * locs.length)];
    const r = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    const clothTypes = ['misc_outfits', 'fashionista_dress', 'fashionista_outfits', 'moncheri_dress', 'moncheri_gown', 'salacious_outfits', 'salacious_dress', 'nerdvana_cosplay', 'nerdvana_outfits', 'cats_outfits', 'cats_dress', 'eroto_outfits', 'eroto_dress', 'dolls_outfits', 'dolls_dress', 'bomba_outfits', 'bomba_dress', 'scandalicious_outfits', 'scandalicious_dress', 'gm_outfits', 'gm_dress', 'danilovich_outfits', 'flamingos_outfits', 'flamingos_dress', 'coco_outfits', 'coco_dress'];
    const pantyTypes = ['lusso', 'eroto', 'salacious', 'cats', 'gm', 'fashionista', 'danilovich'];
    const braTypes = ['lusso', 'eroto', 'salacious', 'cats', 'gm', 'fashionista', 'danilovich', 'none'];
    const shoeTypes = ['moncheri', 'cats', 'bomba', 'dolls', 'eroto', 'scandalicious', 'gm', 'danilovich', 'none'];
    const coatTypes = ['bomba', 'cats', 'danilovich', 'dolls', 'gm', 'moncheri', 'none'];
    const skillNames = ['humint', 'persuas', 'compskl', 'artskls', 'vokal', 'instrmusic', 'perform', 'run', 'ftbll', 'bkbll', 'wrstlng', 'chess', 'shoot', 'heels', 'mdlng', 'sewng', 'servng', 'cleaning', 'medcn', 'photoskl', 'musicprod', 'comphckng', 'hndiwrk', 'observ'];
    const skill_levels: Record<string, number> = {};
    for (const sk of skillNames) {
      if (Math.random() < 0.4) skill_levels[sk + '_lvl'] = r(1, 8);
    }
    const archNames = ['bimbo', 'preppy', 'prude', 'punk', 'goth'];
    const arch_vars: Record<string, string | number> = { main_active: '' };
    let maxArch = 0;
    for (const a of archNames) {
      const pts = Math.random() < 0.3 ? r(50000, 500000) : r(0, 49999);
      arch_vars[a + '_points'] = pts;
      if (pts > maxArch) { maxArch = pts; arch_vars['main_active'] = a; }
    }
    const traitList = ['cumeater', 'creampie_fetish', 'fertility', 'sensitivity', 'new_again', 'heel_preference', 'addictive_personality', 'buttslut', 'exhibitionist', 'panty_preference', 'drinking', 'academic', 'bookworm', 'sizequeen', 'fitness_freak', 'doormat', 'cumslut', 'cum_addict', 'elasticity', 'sleep_duration', 'body_hair_growth_rate', 'body_hair_attitude', 'hair_growth_rate', 'pain_tolerance'];
    const trait_vars: Record<string, number> = {};
    for (const t of traitList) {
      if (Math.random() < 0.25) {
        trait_vars[t] = r(-3, 3);
        trait_vars[t + '_exp'] = r(0, 1000);
      }
    }
    const fameRegions = ['pav', 'city', 'pushkin', 'gad'];
    const fameCats = ['performer', 'acting', 'dance', 'modelling', 'painting', 'music', 'ballet', 'sexind', 'porn', 'stripping', 'slut', 'sex', 'prostitute', 'flash', 'sport', 'kickboxing', 'running', 'volleyball', 'int'];
    const fame: Record<string, number> = {};
    for (const reg of fameRegions) {
      for (const cat of fameCats) {
        if (Math.random() < 0.15) fame[reg + '_' + cat] = r(1, 500);
      }
    }
    const allCombat = ['fog', 'clone', 'stun', 'weapon', 'wind', 'multiclone', 'energo', 'heal', 'hand', 'scaldingtouch', 'burninghands', 'firebarrier', 'firestorm', 'flameshield', 'shock', 'lightning', 'electricbarrier'];
    const allNonCom = ['regenerate', 'curedisease', 'curewounds', 'curewounds2', 'painblock', 'berserk', 'shower', 'makeup', 'cosmetica', 'glamour', 'penisenvy'];
    const allStory = ['haste'];
    const combatSpells: string[] = [];
    const nonComSpells: string[] = [];
    const storySpells: string[] = [];
    for (const s of allCombat) if (Math.random() < 0.3) combatSpells.push(s);
    for (const s of allNonCom) if (Math.random() < 0.3) nonComSpells.push(s);
    for (const s of allStory) if (Math.random() < 0.3) storySpells.push(s);
    const hasMagic = Math.random() < 0.6;
    const hairCol = r(0, 3);
    const hairLng = r(40, 400);
    const eyeCol = r(0, 3);
    const hairbsh = r(0.3, 1);
    const makeup = r(1, 5);
    const skin = r(30, 90);
    const lip = r(1, 4);
    const teeth = r(0, 2) === 0 ? 0 : r(1, 3);
    const lashes = r(1, 3);
    const eyesize = r(1, 3);
    const glass = Math.random() < 0.2 ? 1 : 0;
    const curly = Math.random() < 0.3 ? 1 : 0;
    const hbangs = Math.random() < 0.3 ? 1 : 0;
    const hbraids = hairLng > 80 && Math.random() < 0.15 ? 1 : 0;
    const hpigtail = hairLng > 80 && Math.random() < 0.1 ? 1 : 0;
    const hpingripw = hairLng > 80 && Math.random() < 0.1 ? 1 : 0;
    const hscrunchw = hairLng > 80 && Math.random() < 0.1 ? 1 : 0;
    const fat = r(0, 5);
    const bmi = 18 + fat * 2 + r(0, 3);
    const strenbuf = r(5, 40);
    const cloQuality = r(2, 6);
    const cloThinness = r(1, 5);
    const topCut = r(1, 4);
    const bottomShort = r(1, 5);
    const braQuality = r(2, 6);
    const panQuality = r(2, 6);
    const shoQuality = r(2, 6);
    const coatQuality = r(2, 6);
    const cloDirt = r(0, 200);

    const tattooLocs = ['face', 'lip', 'neck', 'back', 'shoulder', 'breast', 'under', 'chest', 'side', 'belly', 'arm', 'wrist', 'hand', 'leg', 'ankle', 'tramp', 'ass', 'pussy'];
    const tattoos: Record<string, number> = {};
    for (const loc of tattooLocs) {
      if (Math.random() < 0.2) tattoos[loc] = r(1, 3);
    }
    const piercingLocs = ['ears', 'nose', 'lip', 'brow', 'navel', 'nipples', 'tongue', 'pussy'];
    const piercings: Record<string, number> = {};
    for (const loc of piercingLocs) {
      if (Math.random() < 0.25) piercings[loc] = r(1, 2);
    }

    store.set({
      ...initialState,
      pcs_firstname: FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)],
      pcs_lastname: LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)],
      money: 100000,
      clothingworntype: clothTypes[r(0, clothTypes.length - 1)],
      clothingwornnumber: r(1, 20),
      pantyworntype: pantyTypes[r(0, pantyTypes.length - 1)],
      pantywornnumber: r(1, 20),
      braworntype: braTypes[r(0, braTypes.length - 1)],
      brawornnumber: r(1, 20),
      shoeworntype: shoeTypes[r(0, shoeTypes.length - 1)],
      shoewornnumber: r(1, 20),
      coatworntype: coatTypes[r(0, coatTypes.length - 1)],
      coatwornnumber: r(1, 20),
      PCloQuality: cloQuality,
      PCloThinness: cloThinness,
      PXCloTopCut: topCut,
      PXCloBottomShortness: bottomShort,
      PBraQuality: braQuality,
      PPanQuality: panQuality,
      PShoQuality: shoQuality,
      PCoatQuality: coatQuality,
      PCloDirt: cloDirt,
      pcs_tattoos: tattoos,
      pcs_piercings: piercings,
      pcs_haircol: hairCol,
      pcs_hairlng: hairLng,
      pcs_eyecol: eyeCol,
      pcs_hairbsh: hairbsh,
      pcs_makeup: makeup,
      pcs_skin: skin,
      pcs_lip: lip,
      pcs_teeth: teeth,
      pcs_lashes: lashes,
      pcs_eyesize: eyesize,
      glass,
      curly,
      hbangs,
      hbraids,
      hpigtail,
      hpingripw,
      hscrunchw,
      pcs_bmi: bmi,
      strenbuf,
      pcs_breath: 1,
      deodorant_on: 1,
      pcs_mood: r(20, 80),
      pcs_energy: r(30, 90),
      pcs_hydra: r(30, 90),
      pcs_sleep: r(30, 90),
      pcs_willpwr: r(20, 50),
      pcs_health: r(50, 100),
      pcs_stren: r(1, 10),
      pcs_agil: r(1, 10),
      pcs_vital: r(1, 10),
      pcs_intel: r(1, 10),
      pcs_react: r(1, 10),
      pcs_sprt: r(1, 10),
      pcs_chrsm: r(1, 10),
      pcs_prcptn: r(1, 10),
      pcs_inhib: r(20, 80),
      pcs_horny: r(0, 50),
      fat,
      skill_levels,
      arch_vars,
      trait_vars,
      fame,
      combatSpells,
      nonComSpells,
      storySpells,
      pcs_mana: hasMagic ? r(50, 200) : 0,
      manamax: hasMagic ? r(100, 300) : 100,
      start_type: { ...initialState.start_type, magic: hasMagic ? 'magic' : 'nomagic' },
    });
    store.doGoto(loc, '');
    onQuickStart();
  };

  const handleStart = () => {
    if (musicOn) playMusic('suki');
    doGoto('pav_residential', 'wake');
    onStart();
  };

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="min-h-screen flex flex-col items-center justify-center p-8 focus:outline-none"
      style={{ background: 'var(--gl-bg)' }}
    >
      <div className="max-w-2xl w-full flex flex-col items-center gap-6">
        <img
          src={splash}
          alt="Girl Life"
          className="w-full max-h-64 object-contain rounded-lg"
          style={{ border: '2px solid var(--gl-border)' }}
        />

        <div className="text-center space-y-2" style={{ color: 'var(--gl-fg)' }}>
          <h1 className="text-3xl font-bold" style={{ color: 'var(--gl-accent)' }}>Girl Life</h1>
          <p className="text-sm opacity-70">Based on the Russian game ЭТО by DeGross.</p>
          <p className="text-sm opacity-80">
            This game is about the simulated life of a woman containing elements of RPG, strategy, porn and magical combat.
            You may choose what kind of life the character will live according to your play style, conscience or even personal beliefs.
          </p>
          <p className="text-xs opacity-50">
            All characters in this game are fictional. All explicit images are performed by consenting adults aged 18 or older.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 w-48">
          <button
            onClick={handleStart}
            className="w-full py-3 px-6 rounded-lg text-lg font-bold cursor-pointer transition-opacity hover:opacity-80"
            style={{ background: 'var(--gl-accent)', color: '#fff' }}
          >
            Start
          </button>
          <button
            onClick={() => setShowSave(true)}
            className="w-full py-2 px-6 rounded-lg cursor-pointer transition-opacity hover:opacity-80"
            style={{ background: 'var(--gl-panel)', border: '1px solid var(--gl-border)', color: 'var(--gl-fg)' }}
          >
            Load
          </button>
          <button
            onClick={() => setShowSettings(true)}
            className="w-full py-2 px-6 rounded-lg cursor-pointer transition-opacity hover:opacity-80"
            style={{ background: 'var(--gl-panel)', border: '1px solid var(--gl-border)', color: 'var(--gl-fg)' }}
          >
            Settings
          </button>
          <button
            onClick={() => {
              const next = !musicOn;
              setMusicOn(next);
              if (next) playMusic('suki');
              else stopMusic();
            }}
            className="w-full py-2 px-6 rounded-lg cursor-pointer transition-opacity hover:opacity-80 text-sm"
            style={{ background: 'var(--gl-panel)', border: '1px solid var(--gl-border)', color: 'var(--gl-fg)' }}
          >
            {musicOn ? 'Mute music' : 'Unmute music'}
          </button>
        </div>
      </div>

      {showSave && (
        <SaveMenu
          onClose={() => setShowSave(false)}
          onLoad={() => { setShowSave(false); onStart(); }}
        />
      )}
      {showSettings && <SettingsMenu onClose={() => setShowSettings(false)} />}
    </div>
  );
}
