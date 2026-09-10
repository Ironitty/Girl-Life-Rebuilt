import { useGameStore } from '../../core/store';
import type { LocationDef, GameState } from '../../core/types';
import { JOB_REGISTRY } from '../../core/jobData';
import { getJobCard, sortJobsByStatus } from '../../core/jobs';
import type { JobCardInfo } from '../../core/jobs';

function JobCard({ card }: { card: JobCardInfo }) {
  const statusColor = card.status === 'employed'
    ? 'border-green-600 bg-green-950/40'
    : card.status === 'preemployed'
    ? 'border-blue-600 bg-blue-950/40'
    : card.status === 'terminated'
    ? 'border-yellow-600 bg-yellow-950/30'
    : card.status === 'fired'
    ? 'border-red-600 bg-red-950/30'
    : 'border-gray-600 bg-gray-900/40';

  const statusLabel = card.status === 'employed'
    ? (card.suspended ? 'Suspended' : 'Employed')
    : card.status === 'preemployed'
    ? 'Pre-employed'
    : card.status === 'terminated'
    ? 'Terminated'
    : card.status === 'fired'
    ? 'Fired'
    : 'Unemployed';

  return (
    <div className={`rounded-lg border-2 ${statusColor} p-3 mb-2`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-white font-bold text-base">{card.isMystery ? '???' : card.title}</h3>
          {!card.isMystery && <p className="text-gray-400 text-sm">{card.location}</p>}
        </div>
        <span className={`text-xs px-2 py-0.5 rounded ${
          card.status === 'employed' ? 'bg-green-800 text-green-200'
          : card.status === 'preemployed' ? 'bg-blue-800 text-blue-200'
          : card.status === 'terminated' ? 'bg-yellow-800 text-yellow-200'
          : card.status === 'fired' ? 'bg-red-800 text-red-200'
          : 'bg-gray-700 text-gray-300'
        }`}>
          {statusLabel}
        </span>
      </div>

      {card.isMystery ? (
        <p className="text-gray-500 text-sm mt-2 italic">A mysterious opportunity awaits...</p>
      ) : (
        <div className="mt-2 space-y-1">
          {card.hireHint && (
            <p className="text-amber-300 text-sm">{card.hireHint}</p>
          )}
          {card.scheduleText && (
            <p className="text-gray-300 text-sm">{card.scheduleText}</p>
          )}
          {card.payText && (
            <p className="text-emerald-300 text-sm">{card.payText}</p>
          )}
        </div>
      )}
    </div>
  );
}

function JobsViewComponent() {
  const jobStates = useGameStore(st => st.jobStates);
  const state = { jobStates } as unknown as GameState;
  const sorted = sortJobsByStatus(state, JOB_REGISTRY);

  return (
    <div className="p-4 max-h-[70vh] overflow-y-auto">
      <h2 className="text-xl font-bold text-white mb-4">Jobs</h2>
      {sorted.map(jobId => {
        const card = getJobCard(state, jobId);
        return <JobCard key={jobId} card={card} />;
      })}
    </div>
  );
}

export const jobs_view: LocationDef = {
  name: 'jobs_view',
  title: 'Jobs',
  region: 'other',
  locationType: 'menu',
  locclass: '',
  component: JobsViewComponent,
};

export const locations: LocationDef[] = [jobs_view];
