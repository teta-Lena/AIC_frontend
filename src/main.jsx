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
import store from './redux/store'
import {Provider} from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap'


ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <AuthProvider>
      <StreamProvider>
        <PlayerProvider>
          <ToastContainer />
          <Provider store={store}>
          <App />
          </Provider>
        </PlayerProvider>
      </StreamProvider >
    </AuthProvider>
  </ErrorBoundary>
);
