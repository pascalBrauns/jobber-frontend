import React from 'react';
import useSteps from './useSteps';
import { useSelector } from 'Type/Redux';
import Expanded from './Expanded';
import Collapsed from './Collapsed';
import Expand from './Expand';
import Collapse from './Collapse';

const Animation: React.FC<{ duration: number; }> = ({ children, duration }) => {
  const expanded = useSelector(state => state.Picker.expanded);
  const step = useSteps({
    expanded: !expanded,
    duration: duration
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
      <Collapse duration={650}>
        {children}
      </Collapse>
    );
  }
  else if (step === 'collapsed->expanded') {
    return (
      <Expand duration={650}>
        {children}
      </Expand>
    )
  }
  else if (step === 'collapsed') {
    return (
      <Collapsed>
        {children}
      </Collapsed>
    )
  }
  else {
    return null;
  }
};

export default Animation;
