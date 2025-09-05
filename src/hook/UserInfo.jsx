import { useQuery } from "@tanstack/react-query";
import UseAuthContext from "./UseAuthContext";
import useAxiosSecure from "./useAxiosSecure";


const UserInfo = () => {
    const axiosSecure=useAxiosSecure()
    const {user,loading}=UseAuthContext()
 
    const {data:role,isLoading}=useQuery({
        queryKey:[user?.email,'usrInfo'],
        enabled:!loading,
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/user/role/${user?.email}`,{
                headers:{
                  authorization:`Bearer ${localStorage.getItem('access_token')}`
              
                }
              })
            
            return data
        }
    })
    return [role,isLoading]
};

export default UserInfo;
