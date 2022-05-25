import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { Provider } from 'react-redux';
import { store, persistor } from './context/redux/index';
import { PersistGate } from 'redux-persist/integration/react';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SnackbarProvider maxSnack={3}>
            <App />
          </SnackbarProvider>
        </PersistGate>
      </Provider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
