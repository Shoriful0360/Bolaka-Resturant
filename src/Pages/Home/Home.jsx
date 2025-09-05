import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Featured from "./Featured";
import OurMenu from "./OurMenu";
import Slider from "./Slider";
import TestiMonials from "./TestiMonials";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Loading from "../../component/Loading";
import Marquee from "react-fast-marquee";
const Home = () => {
    const axiosPublic=useAxiosPublic()
const{data:reviews,isLoading,refetch}=useQuery({
    queryKey:['reviews'],
    queryFn:async()=>{
        const  res=await axiosPublic.get(`/reviews`)

        return res.data
    }
})

if(isLoading) return <Loading/>
    return (
        <div className="space-y-10">
            <Helmet>
                <title>Bolaka | Home</title>
            </Helmet>
        <Banner></Banner>
        <Slider></Slider>
        <OurMenu></OurMenu>
        <Featured></Featured>
        {/* review */}
              <h2 className="text-3xl font-bold text-center underline underline-offset-8 text-gray-800 mb-10">
          What customer Says
        </h2>
        <Marquee>
 <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
            reviews?.map((review)=>  <TestiMonials key={review._id} review={review}/>)
        }
       
       </div>

        </Marquee>
      
        </div>
    );
};

export default Home;