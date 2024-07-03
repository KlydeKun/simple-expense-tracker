import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import ThemeSwitcher from "./components/ThemeSwitcher.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ pt: Tailwind }}>
      <ThemeSwitcher />
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
