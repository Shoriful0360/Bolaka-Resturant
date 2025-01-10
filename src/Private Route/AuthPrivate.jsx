import { Navigate } from "react-router-dom";
import Loading from "../component/Loading";
import UseAuthContext from "../hook/UseAuthContext";


const AuthPrivate = ({children}) => {
    const {user,loading}=UseAuthContext()
    if(loading) return <Loading></Loading>
    
    if(user){
        return children
    }
    return (
        <div>
            <Navigate to={'/login'}></Navigate>
        </div>
    );
};

export default AuthPrivate;