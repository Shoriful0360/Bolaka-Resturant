
import axios from "axios";
import { useEffect, useState } from "react";


const useMenu = () => {
    const [menues,setMenues]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        axios.get('http://localhost:5000/menu')
        .then(res=>{
          setMenues(res.data)
          setLoading(false)
        })
    },[])
    return [menues,loading]
};

export default useMenu;