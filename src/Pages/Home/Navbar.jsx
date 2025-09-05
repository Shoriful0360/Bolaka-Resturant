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
  console.log('lastScrooly',lastScrolly)

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
    <div className={`fixed top-0 left-0 z-50 w-full bg-white/40 backdrop-blur-md  shadow-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="navbar px-4 sm:px-10 ">
        <div className="navbar-start ">
          {/* Mobile dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-orange-500 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {link}
            </ul>
          </div>

          {/* Brand */}
          <div className="flex flex-col">
          <Link 
  to="/" 
  className="text-md md:text-2xl lg:text-xl xl:text-4xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent"
>
 <span className="text-2xl md:text-4xl lg:text-3xl xl:text-5xl italic"> B</span>olaka <span className="text-xl lg:text-3xl xl:text-5xl italic">R</span>esturant
</Link>

          </div>
        </div>

        {/* Center Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-orange-300 font-bold">
            {link}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          {user ? (
            <button onClick={logoutUser} className="btn">LogOut</button>
          ) : (
            <NavLink to="/login" className="btn">Log In</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
