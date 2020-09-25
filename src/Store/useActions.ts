import { useDispatch } from "react-redux";
import * as Action from 'Store/Action';

const useActions = () => {
  const dispatch = useDispatch();
  return Object.keys(Action).reduce(
    (previous, key) => {
      const action = Action[key as keyof typeof Action];
      const call = (...parameters: Parameters<typeof action>) => dispatch(
        (action as Function).apply(null, parameters)
      );
      return ({
        ...previous,
        [key as keyof typeof Action]: call
      })
    },
    {}
  ) as typeof Action;
}

export default useActions;
