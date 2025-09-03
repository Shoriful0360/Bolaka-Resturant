import  { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import img1 from '../../assets/home/01.jpg'
import img2 from '../../assets/home/02.jpg'
import img3 from '../../assets/home/03.png'
import img4 from '../../assets/home/04.jpg'
import img5 from '../../assets/home/05.png'
import img6 from '../../assets/home/06.png'

const Banner = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='w-screen -ml-[calc(50vw-50%)]' >
            <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
      
        
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 lg:h-[600px] h-[220px] w-full"
      >
        <SwiperSlide>
          <img className='w-full  object-cover object-center' src={img1} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full object-cover object-center' src={img2} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full object-cover object-center' src={img3} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full object-cover object-center' src={img4} />
        </SwiperSlide>
        <SwiperSlide>
        <img  className='w-full object-cover object-center'src={img5} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full object-cover object-center' src={img6} />
        </SwiperSlide>
       
       
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-20  "
      >
        <SwiperSlide >
        <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img6} />
        </SwiperSlide>
     
      </Swiper>  
        </div>
    );
};

export default Banner;