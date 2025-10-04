import { Link, NavLink } from "react-router-dom";
import UseAuthContext from "../../hook/UseAuthContext";
import { FaCartPlus } from "react-icons/fa";
import useCards from "../../hooks/useCards";
import useAdmin from "../../hook/UserInfo";
import Loading from "../../component/Loading";
import { useEffect, useState } from "react";
import UserInfo from "../../hook/UserInfo";

const Navbar = () => {
  const[show,setShow]=useState(true)
  const[lastScrolly,setLastScrolly]=useState(0)
  const { user, logoutUser, loading } = UseAuthContext();
  const [role, isLoading] = UserInfo();
  const [cart] = useCards()


  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>lastScrolly){
        setShow(false)
      }else{
        setShow(true)
      }
      setLastScrolly(window.scrollY)
    }

    window.addEventListener('scroll',handleScroll);
    return()=>window.removeEventListener('scroll',handleScroll)
  },[lastScrolly])

  const link = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/menu">OUR MENU</NavLink></li>
      <li><NavLink to="/shop">OUR SHOP</NavLink></li>
      <li><NavLink to="/booking">Booking</NavLink></li>
      <li><NavLink to="/contact">CONTACT US</NavLink></li>

      {/* ✅ User + Role condition */}
      {user && role?.role==="Admin" && (
        <li><NavLink to="/dashboard/admin_home">DASHBOARD</NavLink></li>
      )}
      {user && role?.role==="Customer" && (
        <>
          <li><NavLink to="/dashboard/user_home">DASHBOARD</NavLink></li>
          {/* cart */}
          <li className="relative">
            <NavLink to="/dashboard/my_cart">
             
               {isLoading || loading ? (
      // 🔹 Loading অবস্থায় badge এর জায়গায় spinner/loader
      <small className="hidden">
        Loading...
      </small>
    ) : (
      // 🔹 Loaded হলে cart count দেখাবে
     <>
       <FaCartPlus className="text-xl" />
      <small className="badge badge-secondary text-base">
        +{cart.length}
      </small>
     </>
    )}
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
  <div
      className={`fixed top-0 left-0 z-50 w-full bg-white/30 backdrop-blur-lg shadow-md 
      transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar px-4 sm:px-8 md:px-12 lg:px-16">
        {/* ==== Left: Hamburger + Brand ==== */}
        <div className="navbar-start flex items-center gap-3">
          {/* Mobile dropdown */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost hover:bg-white/20 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-orange-600 bg-white/90 
              rounded-2xl z-[1] mt-3 w-52 p-3 shadow-lg border border-orange-200"
            >
              {link}
            </ul>
          </div>

          {/* Brand */}
          <Link
            to="/"
            className="flex items-center font-extrabold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 
            bg-clip-text text-transparent tracking-wide"
          >
            <span className="text-2xl md:text-3xl lg:text-4xl italic">B</span>
            <span className="text-lg md:text-xl lg:text-2xl ml-1">olaka</span>
            <span className="text-xl md:text-2xl lg:text-4xl italic ml-1">R</span>
            <span className="text-lg md:text-xl lg:text-2xl ml-1">esturant</span>
          </Link>
        </div>

        {/* ==== Center Nav (desktop only) ==== */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1 text-orange-600 font-semibold tracking-wide">
            {link}
          </ul>
        </div>

        {/* ==== Right: Login/Logout ==== */}
        <div className="navbar-end gap-2">
          {user ? (
            <button
              onClick={logoutUser}
              className="btn btn-sm md:btn-md bg-orange-500 text-white border-none 
              hover:bg-orange-600 rounded-full px-5"
            >
              Log Out
            </button>
          ) : (
            <NavLink
              to="/login"
              className="btn btn-sm md:btn-md bg-gradient-to-r from-orange-400 to-red-500 text-white 
              border-none hover:from-orange-500 hover:to-red-600 rounded-full px-5"
            >
              Log In
            </NavLink>
          )}
        </div>
      </div>
    </div>

  );
};

export default Navbar;
