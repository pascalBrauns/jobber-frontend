import React from 'react';
import Switcher from './Switcher';
import useSpotlight from './useSpotlight';
import { Job } from 'Type/Job';

const useSwitcher = ({ job }: {
  job: Job;
}) => {
  const { spotlight, hidden, toggle } = useSpotlight({ job });
  const switcher = (
    <Switcher
      tooltip={{
        title: `Show ${hidden}`,
        placement: (
          spotlight === 'profile'
            ? 'left'
            : 'right'
        ) as 'left' | 'right'
      }}
      onToggle={toggle}
      direction={(
        spotlight === 'profile'
          ? 'right'
          : 'left'
      ) as 'left' | 'right'}/>
  );

  return {
    switcher, spotlight
  }
}

export default useSwitcher;
