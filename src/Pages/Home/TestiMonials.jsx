
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const TestiMonials = () => {
    return (
            <div
        
          className="flex gap-6 flex-wrap  "
        >
        
         
             <div
             
              className="bg-white w-100 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105"
            >
              {/* Top section with image + name */}
              <div className="flex items-center gap-4 mb-4">
                <img
                src=''
                  className="w-12 h-12 rounded-full border-2 border-indigo-500 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">md:hsoriful</h4>
                  <span className="text-sm text-gray-500"></span>
                </div>
              </div>
              <p className='text-5xl'><RiDoubleQuotesL /></p>
                   
              {/* Rating */}
              <div className="flex mb-3 text-yellow-400 text-lg">
                ★
              </div>
                 {/* {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)} */}
              {/* Review text (clamped to avoid overflow) */}
              <p className="text-gray-600 text-justify ">
               hellow how are you
              </p>
              <p className="text-5xl  ml-[290px] md:ml-[170px]  lg:ml-[335px]"><RiDoubleQuotesR /></p>
            </div>
       
        </div>
    );
};

export default TestiMonials;