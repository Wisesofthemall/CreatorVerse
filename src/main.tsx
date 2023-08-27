import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import ToasterProvider from "./providers/ToasterProvider.tsx";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ShowCreator from "./pages/showCreator.tsx";
import EditCreator from "./pages/EditCreator.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ToasterProvider />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/showCreator" element={<ShowCreator />} />
        <Route path="/editCreator" element={<EditCreator />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
