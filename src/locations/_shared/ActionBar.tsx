import { useGameStore } from '../../core/store';
import type { ActionDef } from '../../core/types';

type ActionStyle = NonNullable<ActionDef['style']>;

const actionBg: Record<ActionStyle, string> = {
  normal: 'rgba(74, 158, 255, 0.15)',
  positive: 'rgba(74, 222, 128, 0.2)',
  negative: 'rgba(248, 113, 113, 0.2)',
  warning: 'rgba(251, 191, 36, 0.2)',
};

interface Props {
  actions: readonly ActionDef[];
}

export default function ActionBar({ actions }: Props) {
  const doAction = useGameStore((s) => s.doAction);

  const visibleActions = actions.filter((a) => !a.visible || a.visible(useGameStore.getState()));

  if (visibleActions.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {visibleActions.map((action, i) => (
        <button
          key={i}
          onClick={() => doAction(action)}
          className="px-3 py-1.5 rounded text-sm transition-colors cursor-pointer"
          style={{
            background: actionBg[action.style ?? 'normal'],
            color: 'var(--gl-fg)',
            border: '1px solid var(--gl-border)',
          }}
        >
          {action.labelFn ? action.labelFn(useGameStore.getState()) : action.label}
        </button>
      ))}
    </div>
  );
}
