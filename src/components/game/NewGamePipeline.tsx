import { useState, useCallback } from 'react';
import { useGameStore } from '../../core/store';
import { STORIES, MAGIC_LOC_INTRO, MAGIC_DROP_OFF } from './introStories';
import type { StoryPage } from './introStories';

type Step =
  | 'warning' | 'start_type' | 'display_mode' | 'intro'
  | 'name' | 'birthday' | 'start_date' | 'start_location'
  | 'social_group' | 'social_sub' | 'appearance' | 'overview';

interface PipelineState {
  step: Step;
  startLoc: 'sg' | 'uni' | 'city';
  startMagic: 'nomagic' | 'magic' | 'tg';
  introPage: number;
  pcsFirstname: string;
  pcsLastname: string;
  pcsNickname: string;
  birthday: number;
  birthmonth: number;
  birthyear: number;
  daystartStart: number;
  startLocation: number;
  socialGroup: string;
  socialCat: string;
  pcsHaircol: number;
  pcsHairlng: number;
  curly: number;
  pcsEyecol: number;
  pcsLashes: number;
  pcsEyesize: number;
  glass: number;
}

interface SubCat {
  id: string;
  name: string;
  sgOnly?: boolean;
}

interface SocialGroup {
  id: string;
  name: string;
  desc: string;
  subs: SubCat[];
}

const SOCIAL_GROUPS: SocialGroup[] = [
  { id: 'cool', name: 'Popular', desc: 'Socially-gifted, often blessed with natural good looks. Envied by many, they have the ability to ruin someone\'s reputation.', subs: [
    { id: 'socialite', name: 'Sociable' },
    { id: 'beautiful', name: 'Beautiful' },
    { id: 'anorexic', name: 'Barely Hanging On' },
    { id: 'bimbo', name: 'Simply Stunning' },
  ]},
  { id: 'jock', name: 'Jock', desc: 'Gifted in their chosen sport, very athletically inclined. Fit and in good shape, respected by the cool kids while being feared by the nerds.', subs: [
    { id: 'volleyball', name: 'Volleyball Player' },
    { id: 'dancer', name: 'Avid Dancer' },
    { id: 'runner', name: 'Track Runner' },
    { id: 'football', name: 'Football Player' },
  ]},
  { id: 'nerd', name: 'Nerd', desc: 'Tend to do well in school, well liked by teachers and other adults. Sometimes picked on or bullied. Subpar athletically.', subs: [
    { id: 'nerdqueen', name: 'Queen of the Nerds' },
    { id: 'goodstudent', name: 'Good Student' },
    { id: 'computergeek', name: 'Computer Geek' },
    { id: 'chessplayer', name: 'Avid Chess Player' },
  ]},
  { id: 'gopnik', name: 'Gopnik', desc: "Don't play by the rules. In decent shape from fighting and troublemaking, but drinking, smoking and drugs counteract this. Not the most well-liked.", subs: [
    { id: 'gopnikstart', name: 'Gopnik' },
    { id: 'troublemaker', name: 'Troublemaker' },
    { id: 'alternative', name: 'Alternative' },
    { id: 'vitekgf', name: "Vitek's Girlfriend", sgOnly: true },
  ]},
  { id: 'outcast', name: 'Outcast', desc: 'The outcasts, the people no one likes to spend time with, other than to bully them. Easy targets to bully and mock.', subs: [
    { id: 'friendless', name: 'Friendless' },
    { id: 'uglyduckling', name: 'Ugly Duckling' },
    { id: 'goodgirl', name: 'Good Girl' },
    { id: 'slut', name: 'Slut' },
    { id: 'goth', name: 'Goth' },
    { id: 'poor', name: 'Poor' },
  ]},
];

const HAIR_COLORS = ['Black', 'Brown', 'Blonde', 'Red'];
const EYE_COLORS = ['Brown', 'Green', 'Blue', 'Gray'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getDaysInMonth(month: number, year: number): number {
  if (month === 2) return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  if (month === 4 || month === 6 || month === 9 || month === 11) return 30;
  return 31;
}

export default function NewGamePipeline({ onComplete }: { onComplete: () => void }) {
  const [s, setS] = useState<PipelineState>({
    step: 'warning',
    startLoc: 'sg',
    startMagic: 'nomagic',
    introPage: 0,
    pcsFirstname: '',
    pcsLastname: '',
    pcsNickname: '',
    birthday: 15,
    birthmonth: 8,
    birthyear: 1999,
    daystartStart: 239,
    startLocation: 0,
    socialGroup: '',
    socialCat: '',
    pcsHaircol: 0,
    pcsHairlng: 480,
    curly: 0,
    pcsEyecol: 0,
    pcsLashes: 1,
    pcsEyesize: 1,
    glass: 0,
  });

  const set = useGameStore((st) => st.set);
  const doGoto = useGameStore((st) => st.doGoto);

  const getStoryPages = (): StoryPage[] => {
    const key = s.startMagic === 'magic' ? 'magic_shared' : s.startLoc === 'sg' ? 'sg_shared' : s.startLoc === 'uni' ? 'uni_shared' : 'city_shared';
    const pages = STORIES[key];
    if (!pages) return STORIES.sg_shared;
    if (key === 'magic_shared') {
      return pages.map((p, i) => {
        if (i === 0) {
          const intro = MAGIC_LOC_INTRO[s.startLoc] || MAGIC_LOC_INTRO.sg;
          return { ...p, text: p.text.map(t => t.replace('__LOC_INTRO__', intro)) };
        }
        if (i === pages.length - 1) {
          const locKey = s.startLoc === 'sg' ? (s.startLocation === 1 ? 'sg_gadukino' : 'sg_pavlovsk') : s.startLoc;
          const dropOff = MAGIC_DROP_OFF[locKey] || MAGIC_DROP_OFF.sg_pavlovsk;
          return { ...p, text: p.text.map(t => t.replace('__DROP_OFF__', dropOff)) };
        }
        return p;
      });
    }
    return pages;
  };

  const commitToStore = useCallback(() => {
    set({
      start_type: { loc: s.startLoc, magic: s.startMagic, group: s.socialGroup, cat: s.socialCat },
      pcs_firstname: s.pcsFirstname || 'Elena',
      pcs_lastname: s.pcsLastname || 'Ivanova',
      pcs_nickname: s.pcsNickname || s.pcsFirstname || 'Elena',
      birthday: s.birthday,
      birthmonth: s.birthmonth,
      birthyear: s.birthyear,
      pcs_dob: s.birthyear * 10000 + s.birthmonth * 100 + s.birthday,
      age: 2016 - s.birthyear,
      vidage: 2016 - s.birthyear,
      daystart: s.daystartStart,
      tsg: s.startLoc === 'sg' ? 1 : 0,
      start_location: s.startLocation,
      pcs_haircol: s.pcsHaircol,
      pcs_hairlng: s.pcsHairlng,
      curly: s.curly,
      pcs_eyecol: s.pcsEyecol,
      pcs_lashes: s.pcsLashes,
      pcs_eyesize: s.pcsEyesize,
      glass: s.glass,
    });
    if (s.startMagic === 'magic') {
      set({ pcs_magik: 5, manamax: 100, pcs_mana: 50 });
    }
    let loc = 'pav_residential';
    let arg = 'wake';
    if (s.startLoc === 'sg' && s.startLocation === 1) {
      loc = 'gad_residential';
      arg = 'wake';
    }
    doGoto(loc, arg);
    onComplete();
  }, [s, set, doGoto, onComplete]);

  const update = (partial: Partial<PipelineState>) => setS(prev => ({ ...prev, ...partial }));

  switch (s.step) {
    case 'warning':
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-6">Warning</h1>
          <div className="max-w-2xl space-y-4 text-center">
            <p>This game contains adult content including but not limited to: nudity, sexual content, mild profanity, and references to alcohol, tobacco, and drugs.</p>
            <p>You are about to begin a new game. Any existing save will be overwritten.</p>
            <p className="text-yellow-400">Do you accept these terms?</p>
          </div>
          <div className="flex gap-4 mt-8">
            <button onClick={() => update({ step: 'start_type' })} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded">Continue</button>
            <button onClick={() => update({ step: 'name', pcsFirstname: 'Elena', pcsLastname: 'Ivanova', pcsNickname: 'Elena' })} className="px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded">Quick Start</button>
          </div>
        </div>
      );

    case 'start_type':
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-6">Choose Your Start</h1>
          <div className="grid grid-cols-3 gap-4 max-w-3xl">
            {([
              { loc: 'sg' as const, label: 'Schoolgirl' },
              { loc: 'uni' as const, label: 'University' },
              { loc: 'city' as const, label: 'City' },
            ]).map(({ loc, label }) => (
              <div key={loc} className="space-y-2">
                <h2 className="text-xl font-semibold text-center">{label}</h2>
                {([
                  { magic: 'nomagic' as const, label: 'Normal' },
                  { magic: 'magic' as const, label: 'Magic' },
                  { magic: 'tg' as const, label: 'TG' },
                ]).map(({ magic, label }) => (
                  <button key={magic} onClick={() => update({ startLoc: loc, startMagic: magic, step: 'display_mode' })} className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm">{label}</button>
                ))}
              </div>
            ))}
          </div>
        </div>
      );

    case 'display_mode':
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-6">Display Mode</h1>
          <p className="text-gray-400 mb-8">Choose how the game displays images.</p>
          <div className="flex gap-4">
            <button onClick={() => update({ step: 'intro', introPage: 0 })} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded">Standard</button>
            <button onClick={() => update({ step: 'intro', introPage: 0 })} className="px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded">Large</button>
          </div>
        </div>
      );

    case 'intro': {
      const pages = getStoryPages();
      const page = pages[s.introPage];
      if (!page) {
        update({ step: 'name' });
        return null;
      }
      const isLast = s.introPage >= pages.length - 1;
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
          {page.image && <img src={page.image} alt="" className="max-h-64 mb-6 rounded" />}
          <div className="max-w-2xl space-y-4">
            {page.text.map((t, i) => <p key={i} className="leading-relaxed">{t}</p>)}
          </div>
          <button onClick={() => { if (isLast) update({ step: 'name' }); else update({ introPage: s.introPage + 1 }); }} className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded">
            {page.actionLabel || (isLast ? 'Continue' : 'Next')}
          </button>
        </div>
      );
    }

    case 'name':
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-6">Character Name</h1>
          <div className="max-w-md space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">First Name</label>
              <input value={s.pcsFirstname} onChange={e => update({ pcsFirstname: e.target.value })} className="w-full px-4 py-2 bg-gray-800 rounded border border-gray-600" placeholder="Elena" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Last Name</label>
              <input value={s.pcsLastname} onChange={e => update({ pcsLastname: e.target.value })} className="w-full px-4 py-2 bg-gray-800 rounded border border-gray-600" placeholder="Ivanova" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Nickname</label>
              <input value={s.pcsNickname} onChange={e => update({ pcsNickname: e.target.value })} className="w-full px-4 py-2 bg-gray-800 rounded border border-gray-600" placeholder="Elena" />
            </div>
            <button onClick={() => update({ step: 'birthday' })} className="w-full mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded">Continue</button>
          </div>
        </div>
      );

    case 'birthday': {
      const days = getDaysInMonth(s.birthmonth, s.birthyear);
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-6">Birthday</h1>
          <div className="max-w-md space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Month</label>
              <select value={s.birthmonth} onChange={e => { const m = parseInt(e.target.value); update({ birthmonth: m, birthday: Math.min(s.birthday, getDaysInMonth(m, s.birthyear)) }); }} className="w-full px-4 py-2 bg-gray-800 rounded border border-gray-600">
                {MONTHS.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Day</label>
              <select value={s.birthday} onChange={e => update({ birthday: parseInt(e.target.value) })} className="w-full px-4 py-2 bg-gray-800 rounded border border-gray-600">
                {Array.from({ length: days }, (_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Year</label>
              <select value={s.birthyear} onChange={e => { const y = parseInt(e.target.value); update({ birthyear: y, birthday: Math.min(s.birthday, getDaysInMonth(s.birthmonth, y)) }); }} className="w-full px-4 py-2 bg-gray-800 rounded border border-gray-600">
                {Array.from({ length: 20 }, (_, i) => { const y = 2010 - i; return <option key={y} value={y}>{y}</option>; })}
              </select>
            </div>
            <p className="text-gray-400 text-center">Age: {2016 - s.birthyear}</p>
            <button onClick={() => update({ step: s.startLoc === 'sg' ? 'start_date' : 'social_group' })} className="w-full mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded">Continue</button>
          </div>
        </div>
      );
    }

    case 'start_date':
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-6">Start Date</h1>
          <p className="text-gray-400 mb-8 text-center max-w-lg">You have four options when it comes to starting the game:</p>
          <div className="space-y-3 max-w-lg w-full">
            <button onClick={() => update({ daystartStart: 239, step: 'start_location' })} className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded text-left"><span className="font-semibold">1. End of August</span> — At the end of the summer holiday, very close to the new school year <i>(recommended)</i></button>
            <button onClick={() => update({ daystartStart: 214, step: 'start_location' })} className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded text-left"><span className="font-semibold">2. Beginning of August</span> — A month before the start of the new school year</button>
            <button onClick={() => update({ daystartStart: 183, step: 'start_location' })} className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded text-left"><span className="font-semibold">3. Beginning of July</span> — One month into the summer holiday</button>
            <button onClick={() => update({ daystartStart: 153, step: 'start_location' })} className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded text-left"><span className="font-semibold">4. Beginning of June</span> — At the beginning of the summer holiday (required for ballet content)</button>
          </div>
        </div>
      );

    case 'start_location':
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-6">Starting Location</h1>
          <p className="text-gray-400 mb-8 text-center max-w-lg">You can choose from two starting locations:</p>
          <div className="space-y-3 max-w-lg w-full">
            <button onClick={() => update({ startLocation: 0, step: 'social_group' })} className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded text-left"><span className="font-semibold">Pavlovsk</span> — A provincial town in a rural area of Russia. Population: 15,000. <i>(Recommended)</i></button>
            <button onClick={() => update({ startLocation: 1, step: 'social_group' })} className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded text-left"><span className="font-semibold">Gadukino</span> — A small farming village with rickety old wooden houses. The village has seen better days.</button>
          </div>
        </div>
      );

    case 'social_group':
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-4">Social Group</h1>
          <p className="text-gray-400 mb-8 text-center max-w-2xl">Select your personality/social group. Your social group will have a major defining impact upon your life and will determine your starting friends, traits and overall look.</p>
          <div className="grid grid-cols-2 gap-3 max-w-2xl">
            {SOCIAL_GROUPS.map(g => (
              <button key={g.id} onClick={() => update({ socialGroup: g.id, step: 'social_sub' })} className="px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded text-left">
                <span className="font-semibold">{g.name}</span>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">{g.desc}</p>
              </button>
            ))}
            <button onClick={() => {
              const g = SOCIAL_GROUPS[Math.floor(Math.random() * SOCIAL_GROUPS.length)];
              const subs = g.subs.filter(sub => !sub.sgOnly || s.startLoc === 'sg');
              const sub = subs[Math.floor(Math.random() * subs.length)];
              update({ socialGroup: g.id, socialCat: sub.id, step: 'appearance' });
            }} className="px-4 py-3 bg-purple-900 hover:bg-purple-800 rounded text-left">
              <span className="font-semibold">Random</span>
            </button>
          </div>
        </div>
      );

    case 'social_sub': {
      const group = SOCIAL_GROUPS.find(g => g.id === s.socialGroup);
      if (!group) return null;
      const subs = group.subs.filter(sub => !sub.sgOnly || s.startLoc === 'sg');
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-4">{group.name}</h1>
          <p className="text-gray-400 mb-8 text-center max-w-2xl">{group.desc}</p>
          <div className="space-y-3 max-w-lg w-full">
            {subs.map(sub => (
              <button key={sub.id} onClick={() => update({ socialCat: sub.id, step: 'appearance' })} className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded text-left">{sub.name}</button>
            ))}
            <button onClick={() => update({ step: 'social_group' })} className="w-full px-4 py-2 bg-gray-900 hover:bg-gray-800 rounded text-sm text-gray-400">Back to groups</button>
          </div>
        </div>
      );
    }

    case 'appearance':
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-6">Appearance</h1>
          <div className="max-w-md space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Hair</h2>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Color: {HAIR_COLORS[s.pcsHaircol]}</label>
                  <button onClick={() => update({ pcsHaircol: (s.pcsHaircol + 1) % HAIR_COLORS.length })} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm">Change</button>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Texture: {s.curly === 0 ? 'Straight' : 'Curly'}</label>
                  <button onClick={() => update({ curly: s.curly === 0 ? 1 : 0 })} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm">Change</button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Eyes</h2>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Color: {EYE_COLORS[s.pcsEyecol]}</label>
                  <button onClick={() => update({ pcsEyecol: (s.pcsEyecol + 1) % EYE_COLORS.length })} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm">Change</button>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Lashes: {s.pcsLashes}</label>
                  <div className="flex gap-2">
                    <button onClick={() => update({ pcsLashes: Math.max(0, s.pcsLashes - 1) })} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-sm">-</button>
                    <button onClick={() => update({ pcsLashes: Math.min(2, s.pcsLashes + 1) })} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-sm">+</button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Size: {s.pcsEyesize}</label>
                  <div className="flex gap-2">
                    <button onClick={() => update({ pcsEyesize: Math.max(0, s.pcsEyesize - 1) })} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-sm">-</button>
                    <button onClick={() => update({ pcsEyesize: Math.min(3, s.pcsEyesize + 1) })} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-sm">+</button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Glasses: {s.glass === 1 ? 'Yes' : 'No'}</label>
                  <button onClick={() => update({ glass: s.glass === 1 ? 0 : 1 })} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm">Toggle</button>
                </div>
              </div>
            </div>
            <button onClick={() => update({ step: 'overview' })} className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded">Continue</button>
          </div>
        </div>
      );

    case 'overview': {
      const group = SOCIAL_GROUPS.find(g => g.id === s.socialGroup);
      const sub = group?.subs.find(sub => sub.id === s.socialCat);
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-6">Character Overview</h1>
          <div className="max-w-lg w-full bg-gray-900 rounded p-6 space-y-3">
            <p><span className="text-gray-400">Name:</span> {s.pcsFirstname || 'Elena'} {s.pcsLastname || 'Ivanova'}</p>
            <p><span className="text-gray-400">Nickname:</span> {s.pcsNickname || s.pcsFirstname || 'Elena'}</p>
            <p><span className="text-gray-400">Birthday:</span> {s.birthday}/{s.birthmonth}/{s.birthyear} (Age {2016 - s.birthyear})</p>
            <p><span className="text-gray-400">Start:</span> {s.startLoc === 'sg' ? 'Schoolgirl' : s.startLoc === 'uni' ? 'University' : 'City'} / {s.startMagic === 'nomagic' ? 'Normal' : s.startMagic === 'magic' ? 'Magic' : 'TG'}</p>
            {s.startLoc === 'sg' && (
              <>
                <p><span className="text-gray-400">Date:</span> {s.daystartStart === 239 ? 'End of August' : s.daystartStart === 214 ? 'Beginning of August' : s.daystartStart === 183 ? 'Beginning of July' : 'Beginning of June'}</p>
                <p><span className="text-gray-400">Location:</span> {s.startLocation === 0 ? 'Pavlovsk' : 'Gadukino'}</p>
              </>
            )}
            <p><span className="text-gray-400">Group:</span> {group?.name || 'N/A'} — {sub?.name || 'N/A'}</p>
            <p><span className="text-gray-400">Hair:</span> {HAIR_COLORS[s.pcsHaircol]}, {s.curly === 0 ? 'Straight' : 'Curly'}</p>
            <p><span className="text-gray-400">Eyes:</span> {EYE_COLORS[s.pcsEyecol]}, Lashes: {s.pcsLashes}, Size: {s.pcsEyesize}{s.glass === 1 ? ', Glasses' : ''}</p>
          </div>
          <button onClick={commitToStore} className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 rounded text-lg font-semibold">Start Game</button>
        </div>
      );
    }

    default:
      return null;
  }
}
