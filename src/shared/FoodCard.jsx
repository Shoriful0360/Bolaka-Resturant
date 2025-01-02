

const FoodCard = ({item}) => {
    const{image,name,recipe,price}=item || {}
    return (
        <div>
          <div className="card bg-base-100 w-[420px ] group relative shadow-xl">
  <figure>
    <img
    className="w-full h-[300px] group-hover:scale-105 transition-all   rounded-md"
      src={image}
      alt="sald foods" />
  </figure>
  <div className="card-body bg-[#F3F3F3]">
    <h2 className=" text-2xl group-hover:text-red-500 font-semibold text-center">
    {name}
      <div className="badge ml-2 badge-secondary">NEW</div>
    </h2>
    <p>{recipe}</p>
    <span className="bg-slate-900 absolute text-white py-2 px-4 rounded-sm top-5 right-5 ">${price}</span>
    <div className="card-actions mt-6 justify-center">
    <button className="btn group-hover:animate-bounce bg-[#E8E8E8] border-0 border-b-2 hover:text-[#BB8506]  text-[#BB8506] border-[#BB8506] uppercase hover:bg-[#111827]">Add To Card</button>
    
    </div>
  </div>
</div>  
        </div>
    );
};

export default FoodCard;