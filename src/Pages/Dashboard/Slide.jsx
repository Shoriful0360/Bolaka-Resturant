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



const Slide = ({handleClose}) => {
  const [isAdmin,isAdminLoading]=useAdmin()


  if(isAdminLoading) return <Loading></Loading>

    return (
        <div className={`bg-orange-400 rounded-md *:text-white h-full `} >
      <ul className="menu *:mt-4 text-xl text-black font-semibold uppercase">
    {
      isAdmin?<>

<li onClick={handleClose}><NavLink to={'/dashboard/admin_home'}><FaHome></FaHome>Admin home</NavLink> </li>  
        <li onClick={handleClose}><NavLink to="/dashboard/addItems"> <FaUtensils /> Add Items</NavLink></li>    
        <li onClick={handleClose}><NavLink to="/dashboard/manageItems"><FaList />Manage Items</NavLink></li>    
        <li onClick={handleClose}><NavLink to="/dashboard/manageBooking"><FaListCheck />Manage Booking</NavLink></li>    
        <li onClick={handleClose}><NavLink to="/dashboard/users"><FaUsersGear />All Users</NavLink></li>    
     
      </>
      :
      // seler
     <SellerRoute></SellerRoute>
    }

        <div className="divider"></div>   
        <li onClick={handleClose}><NavLink to="/"><FaHome></FaHome>home</NavLink></li>    
        <li onClick={handleClose}><NavLink to=""><CiMenuFries />menu</NavLink></li>    
        <li onClick={handleClose}><NavLink to=""><RiShoppingBagFill />shop</NavLink></li>    
        <li onClick={handleClose}><NavLink to=""><MdContactPhone />contact</NavLink></li>  </ul>  
        </div>
    );
};

export default Slide;
