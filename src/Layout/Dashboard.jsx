import { Outlet } from "react-router-dom";
import Slide from "../Pages/Dashboard/Slide";
import { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  return (
    <div className="bg-slate-100">
      {/* Small device navbar */}
      <div className="navbar fixed top-0 left-0 w-full bg-base-100 shadow-sm lg:hidden z-50 px-8">
        <div onClick={handleToggle} className="flex-1 text-2xl font-bold cursor-pointer">
          <TfiMenuAlt />
        </div>
        <div className="flex-none">
          {/* cart dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
          </div>

          {/* profile dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="user"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layout */}
      <div className="flex h-screen  relative">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-screen  lg:w-96 px-4 py-6 transform transition-transform duration-300 z-40
            ${open ? "translate-x-0" : "-translate-x-full"}
            lg:static lg:translate-x-0 lg:block`}
        >
          <Slide open={open} handleClose={handleClose} />
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto  mt-20 sm:mt-10 ">
          {/* header */}
          <div className="navbar shadow-md justify-between pt-10 lg:pt-0 ">
  <div className="">
    <a className="btn btn-ghost text-xl">Dashboard</a>
  </div>
  <div className="">
    <input type="text" placeholder="Search for anything" className="input input-bordered  lg:w-72" />
  
  </div>
</div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
