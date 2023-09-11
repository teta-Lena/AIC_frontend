import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import MusicIndex from "./pages/music/music.page";
import MusicIdPage from "./pages/music/music-id.page";
import Bio from "./pages/bio/Bio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<MusicIndex />} />
        <Route path="/music/:id" element={<MusicIdPage />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
