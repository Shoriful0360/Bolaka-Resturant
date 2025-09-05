
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const TestiMonials = ({review}) => {
    const{name,image,reviewText,rating,designation}=review || {}
    return (
         <div className="flex flex-wrap gap-6 justify-center">
  <div className="bg-[#3C1B3B] w-full md:w-96 rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-1 hover:scale-105 flex flex-col">
   
    {/* Opening quote */}
    <p className="text-white text-4xl mb-2">
      <RiDoubleQuotesL />
    </p>

    {/* Rating */}
    <div className="flex mb-3 text-yellow-400 text-xl">
      {"★".repeat(rating)}{"☆".repeat(5 - rating)}
    </div>

    {/* Review text */}
    <p className="text-white flex-1 text-justify mb-4">
      {reviewText.length > 250 ? reviewText.substring(0, 210) + "..." : reviewText}
    </p>

    {/* Closing quote */}
    <p className="text-white text-4xl ml-auto flex-1">
      <RiDoubleQuotesR />
    </p>
     {/* Top section: user image + name */}
    <div className="flex flex-1 items-center gap-4 mb-4">
      <img
        src={image?image:"https://img.icons8.com/?size=80&id=124190&format=png"}
        alt={name}
        className="w-14 h-14 rounded-full border-2 border-indigo-500 object-cover"
      />
      <div>
        <h4 className="font-semibold text-orange-500 text-lg">{name}</h4>
        <span className="text-sm  text-white">{designation || "Customer"}</span>
      </div>
    </div>

  </div>
</div>

    );
};

export default TestiMonials;


