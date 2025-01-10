
import { FaCartArrowDown, FaHome } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { RiSecurePaymentFill  } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
const SellerRoute = () => {
    return (
       
            <>
        <li><NavLink to={'/dashboard/user_home'}><FaHome></FaHome>User home</NavLink> </li>  
        <li><NavLink to=""> <MdOutlineDateRange /> reservation</NavLink></li>    
        <li><NavLink to={"/dashboard/payment_history"}><RiSecurePaymentFill />payment history</NavLink></li>    
        <li><NavLink to="/dashboard/my_cart"><FaCartArrowDown />my cart</NavLink></li>    
        <li><NavLink to=""><VscPreview />add review</NavLink></li>    
        <li><NavLink to=""><TbBrandBooking />my booking</NavLink></li> 
      </> 
    
    );
};

export default SellerRoute;