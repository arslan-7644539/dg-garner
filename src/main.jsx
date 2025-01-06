import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CardProvider } from "./components/CardContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CardProvider>
        <App />
      </CardProvider>
    </BrowserRouter>
  </StrictMode>
);
