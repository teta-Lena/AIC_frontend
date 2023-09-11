
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
import JoinLive from "./pages/live/JoinLive";
import Live from "./pages/live/Live";
import NotFound from "./pages/404/NotFound";

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
        <Route path="/join-live" element={<JoinLive />} />
        <Route path="/live/:streamId" element={<Live />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
