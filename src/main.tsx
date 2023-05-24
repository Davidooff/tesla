import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { preloadVideo } from "@remotion/preload";

preloadVideo(
  "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4",
);

preloadVideo(
  "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-X-Interior-Carousel-1-Cinematic-Display-Desktop-Global.mp4"
);

preloadVideo(
  "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Range_Desktop-mp4.mp4"
);

preloadVideo(
  "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-X-Interior-Carousel-5-Console-Grade-Gaming-Desktop-Global.mp4"
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
