import axios from "axios";


const instant=axios.create({
    baseURL:'https://bolaka-resturant-server.vercel.app'
})

const useAxiosPublic = () => {
    return instant
};

export default useAxiosPublic;