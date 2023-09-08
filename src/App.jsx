import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import MusicIndex from "./pages/music/music.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<MusicIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
