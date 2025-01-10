import axios from "axios";


const instant=axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosPublic = () => {
    return instant
};

export default useAxiosPublic;