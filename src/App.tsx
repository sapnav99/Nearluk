import { Provider } from "react-redux";

import useExternalScripts from "./hooks/useExternalScripts";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

import AppRoutes from "./Routes/AppRoutes";
function App() {
  useExternalScripts({ urls: ["js/main.min.js", "js/script.js"] });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="theme-layout">
          <AppRoutes />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
