import { useReducer } from "react";

type StateType = {
  count: number;
};
type ActionType =
  | { type: "Increment"; payload: number }
  | { type: "Decrement"; payload: number };

const initialState: StateType = {
  count: 1,
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };

    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Increment = (): void => {
    dispatch({
      type: "Increment",
      payload: 1,
    });
  };
  const Decrement = (): void => {
    dispatch({
      type: "Decrement",
      payload: 1,
    });
  };

  return (
    <div>
      <h1> count change</h1>
      <p>count : {state.count}</p> <br />
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </div>
  );
};

export default UseReducer;
