
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/featured.jpg'


// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../component/SectionTitle';

const Slider = () => {
    return (
        <div className='mt-10'>
          <SectionTitle   subHeading={'from 11:00am to 10:00pm'} heading={'order online'}>
          
          </SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" className='w-full ' />
            <h1 className='text-center -mt-16 text-white uppercase text-xl shadow-md '>Salat </h1>
            </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" className='w-full ' />
        <h1 className='text-center -mt-16 text-white uppercase text-xl shadow-md '>soups </h1>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" className='w-full ' />
        <h1 className='text-center -mt-16 text-white uppercase text-xl shadow-md '>pizzas </h1>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt=""  className='w-full '/>
        <h1 className='text-center -mt-16 text-white uppercase text-xl shadow-md '>deserts </h1>
        </SwiperSlide>
        <SwiperSlide>
            
            <img src={slide3} alt="" className='w-full'/>
            <h1 className='text-center -mt-16 text-white uppercase text-xl shadow-md '>Salat </h1>
   
        </SwiperSlide>
       
      </Swiper>
   
        </div>
    );
};

export default Slider;