import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LayoutDesignProvider from "./context/layoutDesignContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LayoutDesignProvider>
      <App />
    </LayoutDesignProvider>
  </React.StrictMode>
);
