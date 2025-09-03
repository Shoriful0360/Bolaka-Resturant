
import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../component/SectionTitle";
import useCards from "../../../hooks/useCards";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import{toast} from "react-hot-toast"
const MyCart = () => {
    const [cart]=useCards()
    console.log("from cart",cart)
const totalPrice=cart.reduce((prev,item)=>prev+item.price,0)
const axiosSecure=useAxiosPublic()

const handleDelet=async(id)=>{
const {data}=await axiosSecure.delete(`/myCart/${id}`)
if(data.insertedId){
 toast.success('Delet is successfully')
}else{
  toast.error('something is wrong')
}

}
    return (
        <div>
        <div>
        <SectionTitle heading={'wanna add more?'} subHeading={'my cart'}></SectionTitle>
        </div>
       <div className="flex my-4 justify-evenly">
       <h1 className="text-3xl font-semibold">Total orders: {cart.length}</h1>
        <h1 className="text-3xl font-semibold">Total price: ${totalPrice}</h1>
   {
    cart?.length?   <Link to={'/dashboard/payment'}>
    <button className="btn btn-secondary">pay</button>
    </Link>
    :
    <button disabled className="btn ">pay</button>
   }
       </div>
       {/* table */}
       <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="rouded-md">
      <tr className="text-base uppercase rounded-2xl bg-base-300 border-red-200 border-2 ">
        <th>
        
        </th>
        <th>Item image</th>
        <th>item name</th>
        <th>price </th>
        <th>action</th>
      </tr>
    </thead>
    <tbody className="text-xl font-semibold">
      {/* row 1 */}
      {
        cart.map((item,idx)=> <tr key={idx}>
        <th>
          <label>
           {idx+1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.img}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
          
            
            </div>
          </div>
        </td>
        <td>
         {item.name}
        </td>
        <td>${item.price}</td>
        <th>
          <button onClick={()=>handleDelet(item._id)} className="btn btn-ghost text-4xl"><MdDeleteForever /></button>
        </th>
      </tr>)
      }
     
  
     
    
    </tbody>
   
 
  </table>
</div>
        </div>
    );
};

export default MyCart;