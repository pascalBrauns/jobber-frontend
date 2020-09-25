import { useState, useEffect } from 'react';
import { Job } from 'Type/Job';

export type View = 'profile' | 'logs' | 'graph';

const opposite = ({ view, job }: {
  view: View;
  job: Job;
}): View => {
  if (view === 'profile') {
    return (
      job.type === 'task'
        ? 'logs'
        : 'graph'
    );
  }
  else {
    return 'profile';
  }
}

const useSpotlight = ({ job }: {
  job: Job;
}) => {
  const [spotlight, setSpotlight] = useState<View>('profile');
  const [hidden, setHidden] = useState<View>(opposite({
    job,
    view: spotlight
  }));

  useEffect(
    () => {
      setHidden(opposite({ job, view: spotlight }));
    },
    [job, spotlight]
  );

  useEffect(
    () => {
      setSpotlight(opposite({ job, view: hidden }))
    },
    [job, hidden]
  );

  return {
    spotlight,
    hidden,
    setSpotlight,
    setHidden,
    toggle: () => setSpotlight(hidden)
  };
}

export default useSpotlight;
