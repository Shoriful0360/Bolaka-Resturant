

const PopularMenu = ({menu}) => {
    const {price,category,image,recipe,name}=menu
    return (
        <div className="flex justify-between">
          <div className="flex gap-4">
          <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[118px] h-[104px]" src={image} alt="" />  
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























































































