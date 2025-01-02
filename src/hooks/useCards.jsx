import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hook/useAxiosSecure";

const useCards = () => {
    const axiosSecure=useAxiosSecure()

const{data:cart=[]}=useQuery({
    queryKey:['carts'],
    queryFn:async()=>{
        const  res=await axiosSecure.get('/addToCard')
        return res.data
    }
})

    return [cart]
};

export default useCards;