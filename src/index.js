import React from "react";
import { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import AuthProvider from "./contexts/AuthContext";
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <AuthProvider>
      <App />
      </AuthProvider>
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found in the document.");
}
