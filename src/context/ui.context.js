import { createContext, useReducer, useContext } from "react";

const Context = createContext();

function Reducer(state, action) {
  switch(action.type) {
    default: return state;
  }
}

const Default = {

}

const Provider = ({children}) => {
  const [ctx, dispatch] = useReducer(Reducer, Default);

  return (
    <Context.Provider value={[ctx, dispatch]}>
      {children}
    </Context.Provider>
  )
}

const useCtx = () => useContext(Context);

export default useCtx;
export {Provider, Context};