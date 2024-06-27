import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AppContext } from "@machines/appMachine.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContext.Provider>
        <App />
      </AppContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
