import { useState, useEffect, useRef } from 'react';
import { listSaves, deleteSave, serializeSave, deserializeSave } from '../../core/save';
import { useGameStore } from '../../core/store';
import { getLocation } from '../../core/location';
import { toDate } from '../../core/time';

interface SaveInfo {
  slot: number;
  savedAt: number;
  loc: string;
  daystart: number;
}

function formatDate(ts: number): string {
  const d = new Date(ts);
  return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatDay(daystart: number): string {
  const dv = toDate(daystart);
  return `${dv['weekName']} ${dv['day']}${dv['suffix']} ${dv['monthName']} ${dv['year']}`;
}

export default function SaveMenu({ onClose, onLoad }: { onClose: () => void; onLoad?: () => void }) {
  const [saves, setSaves] = useState<SaveInfo[]>([]);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const saveGame = useGameStore((s) => s.saveGame);
  const loadGame = useGameStore((s) => s.loadGame);

  const refresh = async () => {
    setSaves(await listSaves());
  };

  useEffect(() => { refresh(); }, []);

  const handleSave = async (slot: number) => {
    setSaving(true);
    await saveGame(slot);
    setSaving(false);
    setMessage(`Saved to slot ${slot}`);
    refresh();
    setTimeout(() => setMessage(''), 2000);
  };

  const handleLoad = async (slot: number) => {
    await loadGame(slot);
    onClose();
    onLoad?.();
  };

  const handleDelete = async (slot: number) => {
    await deleteSave(slot);
    setMessage(`Deleted slot ${slot}`);
    refresh();
    setTimeout(() => setMessage(''), 2000);
  };

  const fileRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const s = useGameStore.getState();
    const { reminders: _r, set: _s, doGoto: _g, doCall: _c, doPush: _p, doPop: _pp, doAdvanceTime: _a, doAction: _d, dismissReminders: _dr, saveGame: _sv, loadGame: _lg, ...state } = s;
    const json = serializeSave(state);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `GirlLife-save-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setMessage('Save exported');
    setTimeout(() => setMessage(''), 2000);
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = deserializeSave(text);
      const s = useGameStore.getState();
      const { reminders: _r, set: _s, doGoto: _g, doCall: _c, doPush: _p, doPop: _pp, doAdvanceTime: _a, doAction: _d, dismissReminders: _dr, saveGame: _sv, loadGame: _lg, ...state } = s;
      Object.assign(state, data);
      state.stateStack = [];
      useGameStore.setState({ ...state, reminders: [] });
      const loc = state.loc;
      const def = getLocation(loc);
      if (def?.enter) {
        def.enter(state);
      }
      useGameStore.setState({ ...state, reminders: [] });
      setMessage('Save imported');
      onClose();
      onLoad?.();
    } catch {
      setMessage('Import failed — invalid file');
      setTimeout(() => setMessage(''), 3000);
    }
    if (fileRef.current) fileRef.current.value = '';
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: 'rgba(0,0,0,0.7)' }}>
      <div
        className="p-6 rounded-lg max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto"
        style={{ background: 'var(--gl-panel)', border: '2px solid var(--gl-accent)' }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold" style={{ color: 'var(--gl-accent)' }}>
            Save / Load
          </h2>
          <button onClick={onClose} className="px-2 py-1 rounded cursor-pointer opacity-70 hover:opacity-100">
            ✕
          </button>
        </div>

        {message && (
          <div className="mb-3 p-2 rounded text-sm" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--gl-accent)' }}>
            {message}
          </div>
        )}

        <div className="space-y-2">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((slot) => {
            const save = saves.find((s) => s.slot === slot);
            return (
              <div
                key={slot}
                className="flex items-center gap-2 p-2 rounded"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <span className="text-xs opacity-50 w-8">#{slot}</span>
                <div className="flex-1 min-w-0">
                  {save ? (
                    <div className="text-sm">
                      <div className="truncate">{formatDay(save.daystart)} — {save.loc}</div>
                      <div className="text-xs opacity-60">{formatDate(save.savedAt)}</div>
                    </div>
                  ) : (
                    <span className="text-xs opacity-40">Empty</span>
                  )}
                </div>
                <button
                  onClick={() => handleSave(slot)}
                  disabled={saving}
                  className="px-2 py-1 rounded text-xs cursor-pointer disabled:opacity-50"
                  style={{ background: 'var(--gl-accent)', color: '#fff' }}
                >
                  Save
                </button>
                {save && (
                  <>
                    <button
                      onClick={() => handleLoad(slot)}
                      className="px-2 py-1 rounded text-xs cursor-pointer"
                      style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--gl-fg)' }}
                    >
                      Load
                    </button>
                    <button
                      onClick={() => handleDelete(slot)}
                      className="px-2 py-1 rounded text-xs cursor-pointer"
                      style={{ background: 'rgba(255,80,80,0.2)', color: '#f88' }}
                    >
                      Del
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex gap-2 mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            onClick={handleExport}
            className="px-3 py-1.5 rounded text-xs cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--gl-fg)' }}
          >
            Export Save
          </button>
          <button
            onClick={() => fileRef.current?.click()}
            className="px-3 py-1.5 rounded text-xs cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--gl-fg)' }}
          >
            Import Save
          </button>
          <input ref={fileRef} type="file" accept=".json" className="hidden" onChange={handleImport} />
        </div>
      </div>
    </div>
  );
}
