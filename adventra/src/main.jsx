import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "./themes/themeProvider.jsx";
createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="1022286903151-3nc3lt020213ss42lrk1nu3qbr11bkfj.apps.googleusercontent.com">
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </GoogleOAuthProvider>
);
