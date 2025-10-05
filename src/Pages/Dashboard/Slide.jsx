import { CiMenuFries } from "react-icons/ci";
import { FaCartArrowDown, FaHome, FaList, FaUtensils } from "react-icons/fa";
import { FaListCheck, FaUsersGear } from "react-icons/fa6";
import { MdContactPhone, MdDashboard, MdOutlineDateRange } from "react-icons/md";
import { RiSecurePaymentFill, RiShoppingBagFill } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import Loading from "../../component/Loading";
import UserInfo from "../../hook/UserInfo";



const Slide = ({ handleClose }) => {
  const [role, isLoading] = UserInfo()


  if (isLoading) return <Loading></Loading>

  return (
    <div className={` rounded-md bg-white shadow-xl h-full px-5 `} >
      <ul className="menu *:mt-4 text-xl text-black font-semibold uppercase">
         <div className="flex gap-2">
              <div className="bg-orange-300 w-10 h-10 rounded-t-badge flex justify-center mt-2 items-center
        ">
                <h4 className="text-white">BR</h4>
              </div>
              <div>
                <h2 className="normal-case">Bolaka<span className="text-orange-300">Resturant</span></h2>
                <p className="text-slate-500 normal-case">{role?.role} Panel</p>
              </div>
            </div>
            {/* commot route */}
              <li onClick={handleClose}><NavLink to={'/'}><FaHome></FaHome> home</NavLink> </li>
        {
          role?.role === "Admin" && <>
   
            <li onClick={handleClose}><NavLink to={'/dashboard/admin_home'}><MdDashboard /> Dashboard</NavLink> </li>
            <li onClick={handleClose}><NavLink to="/dashboard/users"><FaUsersGear />All Users</NavLink></li>
            <li onClick={handleClose}><NavLink to="/dashboard/addItems"> <FaUtensils /> Add Items</NavLink></li>
            <li onClick={handleClose}><NavLink to="/dashboard/manageItems"><FaList />Manage Items</NavLink></li>
            <li onClick={handleClose}><NavLink to="manage_booking"><FaListCheck />Manage Booking</NavLink></li>

          </>
        }

        {/* customer route */}

        {
          role?.role === "Customer" && <>
            <li onClick={handleClose}><NavLink to={'/dashboard/user_home'}><MdDashboard /> Dashboard</NavLink> </li>
            <li onClick={handleClose}><NavLink to="/dashboard/reservation"> <MdOutlineDateRange /> reservation</NavLink></li>
            <li onClick={handleClose}><NavLink to={"/dashboard/payment_history"}><RiSecurePaymentFill />payment history</NavLink></li>
            <li onClick={handleClose}><NavLink to="/dashboard/my_cart"><FaCartArrowDown />Add To cart</NavLink></li>
            <li onClick={handleClose}><NavLink to="my_booking"><TbBrandBooking />my booking</NavLink></li>

            <li onClick={handleClose}><NavLink to="contact"><MdContactPhone />contact</NavLink></li>
          </>
        }

      </ul>
    </div>
  );
};

export default Slide;
