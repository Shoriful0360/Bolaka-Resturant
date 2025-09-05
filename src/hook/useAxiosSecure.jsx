import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuthContext from "./UseAuthContext";
import { useEffect } from "react";




const axiosInstant=axios.create({
    baseURL:'http://localhost:5000',
  
// https://bolaka-resturant-server.vercel.app
})

const useAxiosSecure = () => {
    const navigate=useNavigate()
    const {logoutUser}=UseAuthContext()

    // request interceptor to add authorizatin header for every secure call 

    axiosInstant.interceptors.request.use(function(config){

        const token=localStorage.getItem('access_token')
      
        config.headers.authorization=`Bearer ${token}`
        return config
    },function(error){
        return Promise.reject(error)
    }) 

    useEffect(()=>{
     axiosInstant.interceptors.response.use(response=>{
      
            return response
        },error=>{
            const status=error.response.status;
    
            if(status===401 || status===403){
                logoutUser()
                navigate('/login')
            }
            // return Promise.reject(error)
        }
    )
    },[logoutUser])



    return axiosInstant
    
};

export default useAxiosSecure;