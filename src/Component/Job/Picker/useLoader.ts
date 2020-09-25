import { useEffect } from 'react';
import useActions from 'Store/useActions';

const useLoader = () => {
  const { loadJobs, loadBlueprints } = useActions();
  useEffect(
    () => {
      loadJobs();
      loadBlueprints();
    },
    []
  );
}

export default useLoader;
