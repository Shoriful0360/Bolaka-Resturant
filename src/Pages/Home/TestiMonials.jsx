import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const TestiMonials = ({ review }) => {
  const { name, image, reviewText, rating, designation } = review || {};
  return (
    <div className="w-80 h-96 flex flex-col justify-between ml-3 bg-[#3C1B3B] rounded-3xl shadow-xl p-6 
                    hover:shadow-2xl transition-transform transform hover:-translate-y-1 hover:scale-105">
      
      {/* Opening quote */}
      <p className="text-white text-4xl mb-2">
        <RiDoubleQuotesL />
      </p>

      {/* Rating */}
      <div className="flex mb-3 text-yellow-400 text-xl">
        {"★".repeat(rating)}{"☆".repeat(5 - rating)}
      </div>

      {/* Review text */}
      <p className="text-white text-sm text-justify flex-1 mb-4 overflow-hidden">
        {reviewText.length > 180
          ? reviewText.substring(0, 180) + "..."
          : reviewText}
      </p>

      {/* Closing quote */}
      <p className="text-white text-4xl ml-auto">
        <RiDoubleQuotesR />
      </p>

      {/* User info */}
      <div className="flex items-center gap-4 mt-4">
        <img
          src={image ? image : "https://img.icons8.com/?size=80&id=124190&format=png"}
          alt={name}
          className="w-14 h-14 rounded-full border-2 border-indigo-500 object-cover"
        />
        <div>
          <h4 className="font-semibold text-orange-500 text-lg">{name}</h4>
          <span className="text-sm text-white">{designation || "Customer"}</span>
        </div>
      </div>
    </div>
  );
};

export default TestiMonials;
