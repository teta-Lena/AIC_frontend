
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./pages";
// import Home from "./pages";
import MusicIndex from "./pages/music/music.page";
import MusicIdPage from "./pages/music/music-id.page";
import Homepage from "./pages/home/Homepage";
import Bio from "./pages/bio/Bio";

function App() {
  function PrivateRoutes() {
    const token = localStorage.getItem("token");
    if (token) {
      return <Outlet />;
    }
    return <Navigate to="/home" />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Home />} />
        </Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/music" element={<MusicIndex />} />
        <Route path="/music/:id" element={<MusicIdPage />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
