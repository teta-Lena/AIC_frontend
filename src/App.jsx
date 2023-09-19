
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
import Videos from "./components/videos/Videos";
import VideosPage from "./pages/videos";
// second module
import HomeStore from './components/store/Home'
import Product from './components/store/Product'
import Contact from './components/store/Contact'
import ProductDetail from './components/store/ProductDetail';
import Cart from './components/store/Cart';
import Checkout from './components/store/Checkout'
import Music from './components/store/Music';
import MusicDetail from './components/store/MusicDetails';
import Store from "./pages/store/storeLanding";

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
        <Route path="/videos" element={<VideosPage/>}  />
        <Route path="/music" element={<MusicIndex />} />
        <Route path="/music/:id" element={<MusicIdPage />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/join-live" element={<JoinLive />} />
        <Route path="/live/:streamId" element={<Live />} />
        <Route path="/store" element={< Store/>}>
          <Route index element={<HomeStore />} />
          <Route path="/store/music/:id" element={<MusicDetail/>}  />
          <Route path="/store/products" element={<Product/>} />
          <Route path="/store/products/:id" element={<ProductDetail />} />
          <Route path="/store/cart" element={<Cart/>} />
          <Route path="/store/checkout" element={<Checkout/>} />
          <Route path="/store/music" element={<Music />} />
          <Route path="/store/contact" element={<Contact/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
