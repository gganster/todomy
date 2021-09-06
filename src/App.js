import React from "react";
import Router from "./Router";
import {Provider} from "./context/user.context";

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
