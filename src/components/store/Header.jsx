import React from 'react'
import CartBtn from '../buttons/CartBtn'
import Login from '../buttons/Login'
import Signup from '../buttons/Signup'
import {NavLink,useLocation} from 'react-router-dom'


const Header = () => {
    const [path, setPath] = React.useState("");
    const location = useLocation();
    React.useEffect(() => {
        setPath(location.pathname);
      }, [location.pathname]);
    
    return (
    <nav className="navbar navbar-expand-lg  bg-black md:max-h-[10vh] ">
     <div className="container-fluid">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-blue-700 flex gap-3">
        <li className="nav-item">
            <NavLink className={path === "/store" ? "border-b-2" : ""} aria-current="page" to="/store">Store</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={path === "/store/products" ? "border-b-2" : ""} to="/store/products">Apparel</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={path === "/store/music" ? "border-b-2" : ""} to="/store/music">Music</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={path === "/store/contact" ? "border-b-2" : ""} to="/store/contact">Contact</NavLink>
        </li>
    </ul>
    <NavLink className="navbar-brand mx-auto fw-bold text-white" to="/">ARIEL WAYS</NavLink>
    <span className='relative grid md:grid-cols-3'>
    <Login />
    <Signup />
    <CartBtn />
    </span>
   </div>
  </nav>
    )
}

export default Header