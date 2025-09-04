

const PopularMenu = ({menu}) => {
    const {price,category,image,recipe,name}=menu
    return (
        <div className="flex justify-between border-2 p-4 rounded-md shadow-md group">
          <div className="sm:flex  gap-4 group-hover:scale-105 text-c transition-all">
         <div className="flex justify-center">
           <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[118px] h-[104px] flex " src={image} alt="" /> </div> 
          <div>
            <h1>{name}.............................</h1>
            <p>{recipe}</p>
            
          </div>
        </div>
          <p className="text-yellow-500 ">${price}</p>
     
        </div>
    );
};

export default PopularMenu;























































































