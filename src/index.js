import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
