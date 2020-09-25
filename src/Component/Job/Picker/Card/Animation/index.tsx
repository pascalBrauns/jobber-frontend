import React from 'react';
import { useSelector } from 'Type/Redux';
import Expanded from './Expanded';
import Collapsed from './Collapsed';
import Collapse from './Collapse';
import Expand from './Expand';
import useSteps from './useSteps';

const Animation: React.FC<{ duration: number; }> = ({ children, duration }) => {
  const expanded = useSelector<boolean>(state => state.Picker.expanded);
  const step = useSteps({
    expanded,
    duration
  });

  if (step === 'expanded') {
    return (
      <Expanded>
        {children}
      </Expanded>
    );
  }
  else if (step === 'expanded->collapsed') {
    return (
      <Collapse duration={duration}>
        {children}
      </Collapse>
    );
  }
  else if (step === 'collapsed->expanded') {
    return (
      <Expand duration={duration}>
        {children}
      </Expand>
    );
  }
  else if (step === 'collapsed') {
    return (
      <Collapsed>
        {children}
      </Collapsed>
    );
  }
  else {
    return null;
  }
}

export default Animation;
