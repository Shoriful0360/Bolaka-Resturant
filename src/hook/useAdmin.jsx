import { useQuery } from "@tanstack/react-query";
import UseAuthContext from "./UseAuthContext";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const axiosSecure=useAxiosSecure()
    const {user,loading}=UseAuthContext()
 
    const {data:isAdmin,isLoading:isAdminLoading}=useQuery({
        queryKey:[user?.email,'isAdmin'],
        enabled:!loading,
        queryFn:async()=>{
            const res=await axiosSecure.get(`/user/admin/${user?.email}`,{
                headers:{
                  authorization:`Bearer ${localStorage.getItem('access_token')}`
              
                }
              })

            return res.data?.admin
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;
