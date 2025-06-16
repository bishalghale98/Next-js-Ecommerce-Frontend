"use client";

import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

// Optional: show loading while rehydrating
function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default ReduxProvider;
