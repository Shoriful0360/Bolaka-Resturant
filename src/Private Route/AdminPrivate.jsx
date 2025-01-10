
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../component/Loading";
import useAdmin from "../hook/useAdmin";
import UseAuthContext from "../hook/UseAuthContext";


const AdminPrivate = ({children}) => {
    const{user,loading}=UseAuthContext()
    const [isAdmin,isAdminLoading]=useAdmin()
    const location=useLocation()
    if(loading||isAdminLoading ) return <Loading></Loading>
 

    if(user && isAdmin) return children

    return (
        <div>
           <Navigate to={'/'} state={{from:location}}></Navigate> 
        </div>
    );
};

export default AdminPrivate;