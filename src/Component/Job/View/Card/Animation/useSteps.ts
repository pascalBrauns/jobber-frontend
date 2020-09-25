import { useState, useEffect } from "react";

type Step = (
  'expanded' |
  'expanded->collapsed' |
  'collapsed->expanded' |
  'collapsed'
);

const useSteps = ({ expanded, duration }: {
  expanded: boolean;
  duration: number;
}) => {
  const [step, setStep] = useState<Step>(expanded ? 'expanded' : 'collapsed');
  const [initial, setInitial] = useState<boolean>(true);

  useEffect(
    () => {
      if (initial) {
        setInitial(false);
      }
      else {
        if (expanded) {
          setStep('collapsed->expanded');
        }
        else {
          setStep('expanded->collapsed');
        }
      }
    },
    [expanded]
  );

  useEffect(
    () => {
      if (step === 'collapsed->expanded') {
        setTimeout(() => setStep('expanded'), duration);
      }
      else if (step === 'expanded->collapsed') {
        setTimeout(() => setStep('collapsed'), duration);
      }
    },
    [step]
  );

  return step;
}

export default useSteps;
