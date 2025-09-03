import SectionTitle from "../../component/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const TestiMonials = () => {
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
        axios.get('https://bolaka-resturant-server.vercel.app/review')
        .then(res=>{
            setReviews(res.data)
        })
    },[])
    return (
        <div>
            <SectionTitle heading={"testimonials"} subHeading={'What Our Client Say'} ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {
reviews.map((review=> <SwiperSlide key={review._id}>
<div className="flex flex-col justify-center items-center sm:mx-24 mx-10 my-20 space-y-4">

<Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />

    <p>{review.details}</p>
    <h1 className="text-yellow-600">{review.name}</h1>
</div>
    </SwiperSlide>))
                }
       
     
      </Swiper>
        </div>
    );
};

export default TestiMonials;