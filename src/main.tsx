import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import logo from "./assets/logo.webp";
import "./index.css";
import App from "./App.tsx";

const preloadImage = (href: string, media?: string) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = href;
  link.type = "image/webp";
  if (media) link.media = media;
  document.head.appendChild(link);
};

preloadImage(logo);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
