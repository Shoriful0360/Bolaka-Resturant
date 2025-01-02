import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const UseAuthContext = () => {
    
const useAuth=useContext(AuthContext)

    return (
       useAuth
    );
};

export default UseAuthContext;