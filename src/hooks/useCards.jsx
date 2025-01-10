import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hook/useAxiosSecure";
import UseAuthContext from "../hook/UseAuthContext";
import useAxiosPublic from "../hook/useAxiosPublic";


const useCards = () => {
    const axiosPublic=useAxiosPublic()
    const {user}=UseAuthContext()

const{data:cart=[],isLoading,refetch}=useQuery({
    queryKey:['carts',user?.email],
    queryFn:async()=>{
        const  res=await axiosPublic.get(`/myCart/${user?.email}`)

        return res.data
    }
})


    return [cart,refetch,isLoading]
};

export default useCards;