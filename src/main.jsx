import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PlayerProvider } from "./contexts/PlayerContext.jsx";
import "./index.css";
import AuthProvider from "./contexts/AuthContext.jsx";
import StreamProvider from "./contexts/StreamContext.jsx";
import ErrorBoundary from "./components/core/ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <AuthProvider>
      <StreamProvider>
        <PlayerProvider>
          <App />
        </PlayerProvider>
      </StreamProvider>
    </AuthProvider>
  </ErrorBoundary>
);
