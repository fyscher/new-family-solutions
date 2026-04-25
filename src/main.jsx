import "./index.css";
import App from "./App.jsx";

import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Router>
      <App />
    </Router>
  </HelmetProvider>,
);
