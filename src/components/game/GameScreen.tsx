import { useState, useEffect, useRef } from 'react';
import { useGameStore } from '../../core/store';
import { getRegisteredLocations, getLocation, isMenuLoc, inferLegacyLocationType } from '../../core/location';
import { tsToTime } from '../../core/time';
import ActionBar from '../../locations/_shared/ActionBar';
import { AREAS } from '../../locations/map/areaData';
import StatusBar from '../../locations/_shared/StatusBar';
import StatDisplayPanel from '../../locations/_shared/StatDisplayPanel';
import SaveMenu from './SaveMenu';
import SettingsMenu from './SettingsMenu';

export default function GameScreen() {
  const loc = useGameStore(s => s.loc);
  const prevLoc = useGameStore(s => s.prevLoc);
  const prevArg = useGameStore(s => s.prevArg);
  const scene = useGameStore(s => s.scene);
  const reminders = useGameStore(s => s.reminders);
  const doGoto = useGameStore(s => s.doGoto);
  const dismissReminders = useGameStore(s => s.dismissReminders);
  const undoAction = useGameStore(s => s.undoAction);
  const redoAction = useGameStore(s => s.redoAction);
  const clearDebugHistory = useGameStore(s => s.clearDebugHistory);

  const [showSave, setShowSave] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showDebug, setShowDebug] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => { rootRef.current?.focus(); }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'F9') { e.preventDefault(); setShowDebug(v => !v); return; }
    if (e.ctrlKey && e.key === 'z' && !e.shiftKey) { e.preventDefault(); useGameStore.getState().undoAction(); return; }
    if (e.ctrlKey && (e.key === 'Z' || (e.key === 'z' && e.shiftKey))) { e.preventDefault(); useGameStore.getState().redoAction(); return; }
    if (!e.shiftKey || (e.key !== 't' && e.key !== 'T')) return;
    e.preventDefault();
    const locs = getRegisteredLocations().filter(n => n !== 'start' && n !== 'map_view');
    for (let i = 0; i < 50; i++) {
      const loc = locs[Math.floor(Math.random() * locs.length)];
      useGameStore.getState().doGoto(loc, '');
      const sc = useGameStore.getState().scene;
      if (sc && (sc.mainText || sc.curActs?.length || sc.backimage)) break;
    }
  };

  const goMap = () => {
    const isArea = loc in AREAS;
    const locDef = getLocation(loc);
    const region = locDef?.region ?? inferLegacyLocationType(loc) ?? 'world';
    doGoto('map_view', isArea ? loc : region === 'pav' ? 'pav_commercial' : region === 'city' ? 'city_center' : 'world');
  };

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="min-h-screen flex flex-col focus:outline-none"
      style={{ background: 'var(--gl-bg)' }}
    >
      <header
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{ background: 'var(--gl-panel)', borderColor: 'var(--gl-border)' }}
      >
        <div className="flex items-center gap-4">
          <span className="font-bold text-lg" style={{ color: 'var(--gl-accent)' }}>
            Girl Life
          </span>
          <span className="text-sm opacity-70">{loc}</span>
          <button
            onClick={goMap}
            className="px-3 py-1 rounded text-xs cursor-pointer"
            style={{ background: 'var(--gl-accent)', color: '#fff' }}
          >
            Map
          </button>
          {prevLoc && (
            <button
              onClick={() => {
                if (isMenuLoc(prevLoc)) {
                  goMap();
                } else {
                  doGoto(prevLoc, prevArg);
                }
              }}
              className="px-3 py-1 rounded text-xs cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--gl-fg)' }}
            >
              Back
            </button>
          )}
        </div>
      </header>

      <StatDisplayPanel onOpenMap={goMap} onOpenSave={() => setShowSave(true)} onOpenSettings={() => setShowSettings(true)} />

      <div className="flex flex-1 overflow-hidden">
        <main
          className="flex-1 p-4 overflow-y-auto"
          style={{ background: scene.backimage ? `url(${scene.backimage}) center/cover` : 'var(--gl-bg)' }}
        >
          {(() => {
            const locDef = getLocation(loc);
            if (locDef?.component) {
              const Comp = locDef.component;
              return <Comp />;
            }
            return (
              <div
                className="p-4 rounded-lg max-w-3xl mx-auto"
                style={{ background: 'rgba(0,0,0,0.7)', color: 'var(--gl-fg)' }}
              >
                {!scene.mainText && !scene.backimage && scene.curActs.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="mb-4 opacity-70">No content for this location.</p>
                    <button onClick={goMap} className="px-4 py-2 rounded" style={{ background: 'var(--gl-accent)', color: '#000' }}>Open Map</button>
                  </div>
                ) : (
                <>
                <div
                  className="whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: scene.mainText }}
                  onClick={(e) => {
                    const target = e.target as HTMLElement;
                    const link = target.closest('a[data-goto]');
                    if (link) {
                      e.preventDefault();
                      const [navLoc, arg] = (link as HTMLAnchorElement).dataset.goto!.split(':');
                      doGoto(navLoc, arg || '');
                    }
                  }}
                />
                {scene.statText && (
                  <div
                    className="mt-3 p-3 rounded text-sm whitespace-pre-wrap"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--gl-border)' }}
                    dangerouslySetInnerHTML={{ __html: scene.statText }}
                  />
                )}
                </>
                )}
              </div>
            );
          })()}
        </main>

        <StatusBar />
      </div>

      <footer
        className="border-t px-4 py-3"
        style={{ background: 'var(--gl-panel)', borderColor: 'var(--gl-border)' }}
      >
        <ActionBar actions={scene.curActs} />
      </footer>

      {reminders.length > 0 && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: 'rgba(0,0,0,0.6)' }}>
          <div
            className="p-6 rounded-lg max-w-md w-full mx-4"
            style={{ background: 'var(--gl-panel)', border: '2px solid var(--gl-accent)' }}
          >
            <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--gl-accent)' }}>
              Upcoming Event
            </h2>
            {reminders.map((r) => (
              <div key={r.id} className="mb-3 p-3 rounded" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <div className="font-semibold">{r.title}</div>
                <div className="text-sm opacity-70">Starts at {tsToTime(r.startTs)}</div>
              </div>
            ))}
            <button
              onClick={dismissReminders}
              className="px-4 py-2 rounded cursor-pointer"
              style={{ background: 'var(--gl-accent)', color: '#fff' }}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {showSave && <SaveMenu onClose={() => setShowSave(false)} />}
      {showSettings && <SettingsMenu onClose={() => setShowSettings(false)} />}
      {showDebug && (
        <div className="fixed bottom-4 right-4 z-50 p-3 rounded-lg max-h-80 overflow-y-auto text-xs font-mono" style={{ background: 'rgba(0,0,0,0.9)', border: '1px solid var(--gl-border)', color: 'var(--gl-fg)', minWidth: '340px' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold" style={{ color: 'var(--gl-accent)' }}>Debug (F9)</span>
            <div className="flex gap-1">
              <button onClick={undoAction} className="px-2 py-0.5 rounded cursor-pointer" style={{ background: 'rgba(255,255,255,0.1)' }} title="Undo (Ctrl+Z)">&lt;</button>
              <button onClick={redoAction} className="px-2 py-0.5 rounded cursor-pointer" style={{ background: 'rgba(255,255,255,0.1)' }} title="Redo (Ctrl+Shift+Z)">&gt;</button>
              <button onClick={clearDebugHistory} className="px-2 py-0.5 rounded cursor-pointer" style={{ background: 'rgba(255,255,255,0.1)' }} title="Clear history">CLR</button>
            </div>
          </div>
          <div className="mb-2 opacity-60">History:</div>
          {((window as any).__debugHistory || []).map((e: any, i: number) => (
            <div key={i} className="whitespace-nowrap opacity-80">#{e.index} {e.location} → {e.action}</div>
          ))}
          <div className="mt-2 mb-1 opacity-60">Log:</div>
          {((window as any).__debugLog || []).map((e: any, i: number) => (
            <div key={i} className="whitespace-nowrap">{e.time} {e.type} {e.detail}</div>
          ))}
        </div>
      )}
    </div>
  );
}
