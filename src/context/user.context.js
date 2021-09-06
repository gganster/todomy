import { createContext, useReducer, useContext } from "react";

const Context = createContext();

const Default = {

}

function Reducer(state, action) {
  switch(action.type) {
    case "login": return {...action.user};
    case "logout": return Default;
    default: return state;
  }
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