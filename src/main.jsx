import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PlayerProvider } from "./contexts/PlayerContext.jsx";
import "./index.css";
import AuthProvider from "./contexts/AuthContext.jsx";
import StreamProvider from "./contexts/StreamContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StreamProvider>
      <PlayerProvider>
        <App />
      </PlayerProvider>
    </StreamProvider >
  </AuthProvider>
);
