
import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "../hook/useAxiosPublic";


const useMenu = () => {
  const axiosSecure=useAxiosPublic()

    const{data:menues,isLoading,refetch}=useQuery({
      queryKey:['menu'],
      queryFn:async()=>{
        const result=await axiosSecure.get('/menu')
        return result.data
      }
    })

    return [menues,isLoading,refetch]
};

export default useMenu;