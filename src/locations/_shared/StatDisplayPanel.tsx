import { useGameStore } from '../../core/store';
import { useShallow } from 'zustand/react/shallow';
import { getDayStage, toDate } from '../../core/time';
import { getLocation } from '../../core/location';
import { SceneBuilder } from '../../core/scene';

function getWeatherImage(s: any): string {
  const dayStageStr = getDayStage(s.totminut);
  const stageMap: Record<string, number> = { morning: 1, afternoon: 2, evening: 3, night: 4 };
  const dayStage = stageMap[dayStageStr] ?? 2;
  const temp = s.temper;
  let tempCat = 4;
  if (temp < -10) tempCat = 1;
  else if (temp <= 5) tempCat = 2;
  else if (temp <= 19) tempCat = 3;
  let fallCat = 1;
  if (s.weatherFall >= 60) fallCat = 3;
  else if (s.weatherFall >= 30) fallCat = 2;
  const sunCat = s.sunWeather === 1 ? 1 : 2;
  return `images/system/weather/wthr${dayStage}${tempCat}${fallCat}${sunCat}.jpg`;
}

function getTempColor(temp: number): string {
  if (temp < 0) return 'text-blue-300';
  if (temp < 10) return 'text-green-300';
  if (temp < 20) return 'text-yellow-300';
  if (temp < 30) return 'text-orange-400';
  return 'text-red-400';
}

interface StatusIcon {
  icon: string;
  text: string;
  color?: string;
}

function getStatusIcons(s: any): StatusIcon[] {
  const icons: StatusIcon[] = [];
  const painTotal = s.pain['total'] ?? 0;

  if (s.pcs_horny >= 75) icons.push({ icon: 'status/arousal_high', text: "Can't stop thinking about sex", color: 'text-pink-400' });
  else if (s.pcs_horny >= 50) icons.push({ icon: 'status/arousal_med', text: 'Warm desire quickens your pulse', color: 'text-pink-300' });
  else if (s.pcs_horny >= 25) icons.push({ icon: 'status/arousal_low', text: 'A faint tug of want' });

  if (painTotal > 50) icons.push({ icon: 'status/pain_2', text: 'Sharp pain flares', color: 'text-red-400' });
  else if (painTotal > 25) icons.push({ icon: 'status/pain_1', text: 'Nagging pain', color: 'text-orange-300' });
  else if (painTotal > 5) icons.push({ icon: 'status/pain_1', text: 'Small ache' });

  const healthPct = s.healthmax > 0 ? (s.pcs_health / s.healthmax) * 100 : 100;
  if (healthPct < 15) icons.push({ icon: 'status/health', text: 'Critical condition', color: 'text-red-400' });
  else if (healthPct < 30) icons.push({ icon: 'status/health', text: 'Health faltering', color: 'text-orange-300' });
  else if (healthPct < 60) icons.push({ icon: 'status/health', text: 'Noticeably unwell' });

  const willPct = s.willpowermax > 0 ? (s.pcs_willpwr / s.willpowermax) * 100 : 100;
  if (willPct < 20) icons.push({ icon: 'status/willpower_low', text: "At others' mercy", color: 'text-red-400' });
  else if (willPct < 40) icons.push({ icon: 'status/willpower_low', text: 'Resolve wavering', color: 'text-orange-300' });
  else if (willPct < 60) icons.push({ icon: 'status/willpower_med', text: 'Doubt creeping in' });

  if (s.pcs_mood < 10) icons.push({ icon: 'status/mood_6', text: 'Dark despair', color: 'text-red-400' });
  else if (s.pcs_mood < 25) icons.push({ icon: 'status/mood_5', text: 'Sharp melancholy', color: 'text-orange-300' });
  else if (s.pcs_mood < 40) icons.push({ icon: 'status/mood_4', text: 'Down and unmotivated' });
  else if (s.pcs_mood < 60) icons.push({ icon: 'status/mood_3', text: 'Mood is neutral' });
  else if (s.pcs_mood < 80) icons.push({ icon: 'status/mood_2', text: 'Content and at ease' });
  else icons.push({ icon: 'status/mood_1', text: 'Feeling wonderful', color: 'text-green-300' });

  if (s.pcs_sleep < 20) icons.push({ icon: 'status/lack_of_sleep_4', text: 'Eyes burning with exhaustion', color: 'text-red-400' });
  else if (s.pcs_sleep < 40) icons.push({ icon: 'status/lack_of_sleep_3', text: 'Running on fumes', color: 'text-orange-300' });
  else if (s.pcs_sleep < 60) icons.push({ icon: 'status/lack_of_sleep_2', text: 'Sleep deprivation' });
  else if (s.pcs_sleep < 80) icons.push({ icon: 'status/lack_of_sleep_1', text: 'Could use more rest' });

  if (s.pcs_energy < 20) icons.push({ icon: 'status/need_food', text: 'Stomach growling', color: 'text-orange-300' });
  else if (s.pcs_energy < 40) icons.push({ icon: 'status/need_food', text: 'Getting hungry' });

  if (s.pcs_hydra < 20) icons.push({ icon: 'status/need_drink', text: 'Throat parched', color: 'text-orange-300' });
  else if (s.pcs_hydra < 40) icons.push({ icon: 'status/need_drink', text: 'Getting thirsty' });

  if (Number(s.pcs_period['active']) === 1) icons.push({ icon: 'status/vperiod_sanitaries', text: 'On period' });

  if (s.sickstage > 0) icons.push({ icon: 'status/health', text: `Sick (stage ${s.sickstage})`, color: 'text-red-300' });

  if (s.stat['alko'] > 0) {
    const alko = s.stat['alko'];
    if (alko > 100) icons.push({ icon: 'status/alko_4', text: 'Wasted', color: 'text-purple-300' });
    else if (alko > 50) icons.push({ icon: 'status/alko_3', text: 'Quite drunk', color: 'text-purple-300' });
    else if (alko > 20) icons.push({ icon: 'status/alko_2', text: 'Tipsy' });
    else icons.push({ icon: 'status/alko_1', text: 'Slight buzz' });
  }

  return icons;
}

interface MenuIcon {
  icon: string;
  tip: string;
  onClick?: () => void;
  visible?: boolean;
}

export default function StatDisplayPanel({ onOpenSave, onOpenSettings }: { onOpenMap?: () => void; onOpenSave?: () => void; onOpenSettings?: () => void }) {
  const s = useGameStore(useShallow(st => ({
    totminut: st.totminut,
    temper: st.temper,
    weatherFall: st.weatherFall,
    sunWeather: st.sunWeather,
    pain: st.pain,
    pcs_horny: st.pcs_horny,
    healthmax: st.healthmax,
    pcs_health: st.pcs_health,
    willpowermax: st.willpowermax,
    pcs_willpwr: st.pcs_willpwr,
    pcs_mood: st.pcs_mood,
    pcs_sleep: st.pcs_sleep,
    pcs_energy: st.pcs_energy,
    pcs_hydra: st.pcs_hydra,
    pcs_period: st.pcs_period,
    sickstage: st.sickstage,
    stat: st.stat,
    daystart: st.daystart,
    money: st.money,
    bag: st.bag,
    start_type: st.start_type,
    statAlerts: st.statAlerts,
  })));

  const weatherImg = getWeatherImage(s);
  const tempColor = getTempColor(s.temper);
  const statusIcons = getStatusIcons(s);

  const totalMin = Math.floor(s.totminut);
  const hour = Math.floor((totalMin % 1440) / 60);
  const min = totalMin % 60;
  const timeStr = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;

  const dv = toDate(s.daystart);
  const dateStr = `${dv['weekName']} ${dv['day']}${dv['suffix']} ${dv['monthName']} ${dv['year']}`;

  const doGoto = useGameStore((st) => st.doGoto);
  const saveGame = useGameStore((st) => st.saveGame);
  const loadGame = useGameStore((st) => st.loadGame);

  const navMenu = (loc: string, arg: string, label: string) => {
    if (getLocation(loc)) {
      doGoto(loc, arg);
    } else {
      doGoto(loc, arg);
      useGameStore.setState((st) => ({ scene: { ...st.scene, mainText: `<h2>${label}</h2><p class="opacity-60">Not yet implemented.</p>`, curActs: [{ label: '← Back', goto: [st.prevLoc || st.loc, st.prevArg || ''] }] } }));
    }
  };

  const flashMsg = (msg: string) => {
    useGameStore.setState((s) => ({ scene: { ...s.scene, mainText: `<p class="text-green-300">${msg}</p>` } }));
    setTimeout(() => {
      const st = useGameStore.getState();
      const def = getLocation(st.loc);
      if (def?.enter) {
        const sb = new SceneBuilder();
        def.enter(st, sb);
        useGameStore.setState({ scene: sb.build() });
      }
    }, 1200);
  };

  const menuIcons: MenuIcon[] = [
    { icon: 'icon_character', tip: 'Character description', onClick: () => navMenu('menu_character', '', 'Character Description'), visible: true },
    { icon: 'icon_lookself', tip: 'Looks (Face, body, clothing, ...)', onClick: () => navMenu('menu_looks', '', 'Looks'), visible: true },
    { icon: 'icon_purse', tip: 'Your purse', onClick: () => navMenu('din_bad', 'd_bag', 'Purse'), visible: (s as any).bag > 0 },
    { icon: 'icon_phone', tip: 'Your phone', onClick: () => navMenu('telefon', 'Phone_menu', 'Phone'), visible: true },
    { icon: s.start_type['magic'] !== 'nomagic' ? 'journal_magic' : 'journal_norm', tip: s.start_type['magic'] !== 'nomagic' ? 'Spellbook & Journal' : 'Journal', onClick: () => navMenu('obj_din', 'records', 'Journal'), visible: true },
    { icon: 'clock', tip: 'Pass time', onClick: () => navMenu('obj_din', 'wait', 'Pass Time'), visible: true },
    { icon: 'icon_menu', tip: 'Menu & Cheatmenu', onClick: onOpenSettings, visible: true },
  ];

  const saveIcons: MenuIcon[] = [
    { icon: 'stat_qsave', tip: 'Quick Save', onClick: () => { saveGame(0); flashMsg('Quick saved.'); }, visible: true },
    { icon: 'stat_save', tip: 'Save', onClick: onOpenSave, visible: true },
    { icon: 'stat_load', tip: 'Load', onClick: onOpenSave, visible: true },
    { icon: 'stat_qload', tip: 'Quick Load', onClick: () => { loadGame(0); flashMsg('Quick loaded.'); }, visible: true },
  ];

  return (
    <div className="px-3 py-2 border-b" style={{ background: 'var(--gl-panel)', borderColor: 'var(--gl-border)' }}>
      <div className="flex items-center gap-3">
        <img src={weatherImg} alt="" className="h-10 object-contain shrink-0" />
        <span className={`text-lg font-bold ${tempColor} shrink-0`}>{Math.round(s.temper)}°C</span>
        <span className="text-base font-bold opacity-80 shrink-0">{timeStr}</span>
        <span className="text-xs opacity-60 shrink-0">{dateStr}</span>
        <span className="text-base font-bold opacity-80 shrink-0">₽{s.money.toLocaleString()}</span>
        <div className="flex items-center gap-1 ml-auto shrink-0">
          {menuIcons.filter(ic => ic.visible).map((ic, i) => (
            <button key={i} onClick={ic.onClick} title={ic.tip} className="hover:opacity-80 opacity-70 hover:opacity-100 p-0.5 rounded">
              <img src={`images/system/icons/menu/${ic.icon}.png`} alt="" className="h-10 w-auto" />
            </button>
          ))}
          {saveIcons.filter(ic => ic.visible).map((ic, i) => (
            <button key={i} onClick={ic.onClick} title={ic.tip} className="hover:opacity-80 opacity-70 hover:opacity-100 p-0.5 rounded">
              <img src={`images/system/icons/${ic.icon}.png`} alt="" className="h-10 w-auto" />
            </button>
          ))}
        </div>
        {statusIcons.length > 0 && (
          <div className="flex items-center gap-3 pl-3 shrink-0" style={{ borderLeft: '1px solid var(--gl-border)' }}>
            {statusIcons.map((ic, i) => (
              <span key={i} className={`flex items-center gap-1 text-xs ${ic.color ?? 'opacity-70'}`} title={ic.text}>
                <img src={`images/system/icons/${ic.icon}.png`} alt="" className="w-6 h-6 object-contain" />
                <span>{ic.text}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {s.statAlerts.length > 0 && (
        <div className="flex flex-wrap gap-x-5 mt-1">
          {s.statAlerts.map((alert, i) => (
            <span key={i} className="text-sm font-bold text-red-400">{alert}</span>
          ))}
        </div>
      )}
    </div>
  );
}
