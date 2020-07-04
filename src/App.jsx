import React from "react";
import Home from "./pages";
import { store } from "./store";
import { Provider } from "react-redux";
// import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <Provider store={store}>
      {/* <ThemeProvider> */}
      <Home />
      {/* </ThemeProvider> */}
    </Provider>
  );
}

export default App;
