import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import AuthProvider from "./contexts/AuthContext.jsx";
import { PlayerProvider } from "./contexts/PlayerContext.jsx";
import StreamProvider from "./contexts/StreamContext.jsx";
import "./index.css";
import ErrorBoundary from "./components/core/ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <AuthProvider>
      <StreamProvider>
        <PlayerProvider>
          <ToastContainer />
          <App />
        </PlayerProvider>
      </StreamProvider >
    </AuthProvider>
  </ErrorBoundary>
);
