import { useState } from 'react';
import { playSound, stopMusic } from '../../core/audio';
import { themes, applyTheme, getCurrentTheme } from '../../core/theme';

export interface PanelSections {
  status: boolean;
  condition: boolean;
  attributes: boolean;
  appearance: boolean;
  clothing: boolean;
  tattoos: boolean;
  piercings: boolean;
  skills: boolean;
  relations: boolean;
  misc: boolean;
}

interface Settings {
  fontSize: number;
  soundOn: boolean;
  musicOn: boolean;
  autoSave: boolean;
  theme: string;
  panel: PanelSections;
}

const defaultPanel: PanelSections = {
  status: true,
  condition: false,
  attributes: false,
  appearance: true,
  clothing: true,
  tattoos: true,
  piercings: true,
  skills: false,
  relations: false,
  misc: false,
};

function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem('gl_settings');
    if (raw) {
      const parsed = JSON.parse(raw);
      return { theme: getCurrentTheme(), panel: { ...defaultPanel, ...parsed.panel }, ...parsed };
    }
  } catch { /* ignore */ }
  return { fontSize: 16, soundOn: true, musicOn: true, autoSave: true, theme: 'dark', panel: { ...defaultPanel } };
}

export function getPanelSections(): PanelSections {
  return loadSettings().panel;
}

function persistSettings(s: Settings): void {
  localStorage.setItem('gl_settings', JSON.stringify(s));
}

export default function SettingsMenu({ onClose }: { onClose: () => void }) {
  const [settings, setSettings] = useState<Settings>(loadSettings());

  const update = (partial: Partial<Settings>) => {
    const next = { ...settings, ...partial };
    setSettings(next);
    persistSettings(next);
    document.documentElement.style.fontSize = `${next.fontSize}px`;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: 'rgba(0,0,0,0.7)' }}>
      <div
        className="p-6 rounded-lg max-w-sm w-full mx-4"
        style={{ background: 'var(--gl-panel)', border: '2px solid var(--gl-accent)' }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold" style={{ color: 'var(--gl-accent)' }}>
            Settings
          </h2>
          <button onClick={onClose} className="px-2 py-1 rounded cursor-pointer opacity-70 hover:opacity-100">
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm block mb-1">Font Size: {settings.fontSize}px</label>
            <input
              type="range"
              min={12}
              max={24}
              value={settings.fontSize}
              onChange={(e) => update({ fontSize: Number(e.target.value) })}
              className="w-full"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm">Sound Effects</label>
            <button
              onClick={() => {
                const on = !settings.soundOn;
                update({ soundOn: on });
                if (on) playSound('click', 0.5);
              }}
              className="px-3 py-1 rounded text-xs cursor-pointer"
              style={{
                background: settings.soundOn ? 'var(--gl-accent)' : 'rgba(255,255,255,0.1)',
                color: settings.soundOn ? '#fff' : 'var(--gl-fg)',
              }}
            >
              {settings.soundOn ? 'ON' : 'OFF'}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm">Music</label>
            <button
              onClick={() => {
                const on = !settings.musicOn;
                update({ musicOn: on });
                if (!on) stopMusic();
              }}
              className="px-3 py-1 rounded text-xs cursor-pointer"
              style={{
                background: settings.musicOn ? 'var(--gl-accent)' : 'rgba(255,255,255,0.1)',
                color: settings.musicOn ? '#fff' : 'var(--gl-fg)',
              }}
            >
              {settings.musicOn ? 'ON' : 'OFF'}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm">Auto-save (on location change)</label>
            <button
              onClick={() => update({ autoSave: !settings.autoSave })}
              className="px-3 py-1 rounded text-xs cursor-pointer"
              style={{
                background: settings.autoSave ? 'var(--gl-accent)' : 'rgba(255,255,255,0.1)',
                color: settings.autoSave ? '#fff' : 'var(--gl-fg)',
              }}
            >
              {settings.autoSave ? 'ON' : 'OFF'}
            </button>
          </div>

          <div>
            <label className="text-sm block mb-2">Theme</label>
            <div className="flex gap-2 flex-wrap">
              {Object.entries(themes).map(([key, t]) => (
                <button
                  key={key}
                  onClick={() => {
                    update({ theme: key });
                    applyTheme(key);
                  }}
                  className="px-3 py-1 rounded text-xs cursor-pointer"
                  style={{
                    background: settings.theme === key ? 'var(--gl-accent)' : 'rgba(255,255,255,0.1)',
                    color: settings.theme === key ? '#fff' : 'var(--gl-fg)',
                    border: `1px solid var(--gl-border)`,
                  }}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm block mb-2 font-bold">Side Panel Sections</label>
            <div className="space-y-1.5">
              {([
                ['status', 'Status Bars'],
                ['condition', 'Condition Texts'],
                ['attributes', 'Attributes'],
                ['appearance', 'Appearance'],
                ['clothing', 'Clothing'],
                ['tattoos', 'Tattoos'],
                ['piercings', 'Piercings'],
                ['skills', 'Skills'],
                ['relations', 'Relations'],
                ['misc', 'Misc Info'],
              ] as [keyof PanelSections, string][]).map(([key, label]) => (
                <label key={key} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.panel[key]}
                    onChange={() => {
                      const next = { ...settings, panel: { ...settings.panel, [key]: !settings.panel[key] } };
                      setSettings(next);
                      persistSettings(next);
                    }}
                    className="accent-[var(--gl-accent)]"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
