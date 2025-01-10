import { CiMenuFries } from "react-icons/ci";
import { FaCartArrowDown, FaHome, FaList, FaUtensils } from "react-icons/fa";
import { FaListCheck, FaUsersGear } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { RiSecurePaymentFill, RiShoppingBagFill } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import useAdmin from "../../hook/useAdmin";
import Loading from "../../component/Loading";
import SellerRoute from "./Seller/SellerRoute";



const Slide = () => {
  const [isAdmin,isAdminLoading]=useAdmin()


  if(isAdminLoading) return <Loading></Loading>

    return (
        <div >
      <ul className="menu *:mt-4 text-xl text-black font-semibold uppercase">
    {
      isAdmin?<>

<li><NavLink to={'/dashboard/adminHome'}><FaHome></FaHome>Admin home</NavLink> </li>  
        <li><NavLink to="/dashboard/addItems"> <FaUtensils /> Add Items</NavLink></li>    
        <li><NavLink to="/dashboard/manageItems"><FaList />Manage Items</NavLink></li>    
        <li><NavLink to="/dashboard/manageBooking"><FaListCheck />Manage Booking</NavLink></li>    
        <li><NavLink to="/dashboard/users"><FaUsersGear />All Users</NavLink></li>    
     
      </>
      :
      // seler
     <SellerRoute></SellerRoute>
    }

        <div className="divider"></div>   
        <li><NavLink to="/"><FaHome></FaHome>home</NavLink></li>    
        <li><NavLink to=""><CiMenuFries />menu</NavLink></li>    
        <li><NavLink to=""><RiShoppingBagFill />shop</NavLink></li>    
        <li><NavLink to=""><MdContactPhone />contact</NavLink></li>  </ul>  
        </div>
    );
};

export default Slide;
