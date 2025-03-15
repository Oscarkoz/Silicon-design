import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./output.css";

// Här renderar jag hela App-komponenten och omsluter den med BrowserRouter för att kunna använda routing.
// Enligt CHATGPT så är detta en bra metod för att använda routing i React.
// Även om jag inte förstår varför eller hur det fungerar så är det enligt CHATGPT en bra metod.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* Omslut hela App med Router */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
