
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../component/Loading";
import UseAuthContext from "../hook/UseAuthContext";
import UserInfo from "../hook/UserInfo";


const AdminPrivate = ({children}) => {
    const [role,isLoading]=UserInfo()
    const location=useLocation()
    if(isLoading ) return <Loading></Loading>
 

    if(role.role==="Admin") return children

    return (
        <div>
           <Navigate to={'/'} state={{from:location}}></Navigate> 
        </div>
    );
};

export default AdminPrivate;