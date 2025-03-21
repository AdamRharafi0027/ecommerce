import { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Components/Store/Store";
import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
