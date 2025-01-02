import { Link, NavLink } from "react-router-dom";
import UseAuthContext from "../../hook/UseAuthContext";
import { FaCartPlus } from "react-icons/fa";
import useCards from "../../hooks/useCards";


const Navbar = () => {
  const{user,logoutUser}=UseAuthContext()
  const [cart]=useCards()

  const link=<>
   <li><NavLink to={'/'}>Home</NavLink></li>
   <li><NavLink to={'/contact'}>CONTACT US</NavLink></li>
   <li><NavLink to={'/dashboard'}>DASHBOARD</NavLink></li>
   <li><NavLink to={'/menu'}>OUR MENU</NavLink></li>
   <li><NavLink to={'/shop'}>OUR SHOP</NavLink></li>
   <li className="relative"><NavLink to={''}><FaCartPlus className="text-xl" /> <small className="badge badge-secondary  text-base">+{cart.length}</small></NavLink></li>
  </>
    return (
        <div>
           <div className="navbar fixed z-10 max-w-screen-2xl bg-white/20 text-white bg-opacity-30">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {link}
      </ul>
    </div>
  <div className="flex flex-col">
  <a className="btn btn-ghost uppercase first first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left text-xl">Bolaka <br />Resturant</a>

  </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {link}
    </ul>

  </div>
  <div className="navbar-end">
    {
      user?<button onClick={logoutUser} className="btn">LogOut</button>:   <NavLink to={'/login'} className=" btn ">Log In</NavLink>
    }
 
  </div>
</div>
        </div>
    );
};

export default Navbar;