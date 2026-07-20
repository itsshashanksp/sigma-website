import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "./styles/global.css";
import "./styles/components.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/services.css";
import "./styles/products.css";
import "./styles/stats.css";
import "./styles/industries.css";
import "./styles/locateus.css";
import "./styles/enquiry.css";
import "./styles/footer.css";
import "./styles/responsive.css";
import "./styles/whyChooseUs.css";
import "./styles/CTA.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
