import { Link } from "react-router-dom";
import PopularMenu from "./PopularMenu";


const MenuCategories = ({menues,text,title}) => {
    return (
        <div>
         <div className="grid mt-10 grid-cols-2 gap-6">
         {
            menues?.map(menu=><PopularMenu key={menu._id} menu={menu}></PopularMenu>)
          } 
            </div> 
           
            <div className="text-center">
        <Link to={`/shop/${title}`}>  <button className="btn btn-outline uppercase  mb-2  border-0 border-b-2">{text}</button></Link>
          </div>
        </div>
    );
};

export default MenuCategories;