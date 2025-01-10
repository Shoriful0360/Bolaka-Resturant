import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../component/SectionTitle";
import useCards from "../../hooks/useCards";


const Cart = () => {
    const [cart]=useCards()
    const totalPrice=cart.reduce((prev,item)=>prev+item.price,0)
    return (
        <div>
        <div>
        <SectionTitle heading={'wanna add more?'} subHeading={'my cart'}></SectionTitle>
        </div>
       <div className="flex justify-evenly">
       <h1 className="text-3xl font-semibold">Total orders: {cart.length}</h1>
        <h1 className="text-3xl font-semibold">Total price: ${totalPrice}</h1>
        <button className="btn">pay</button>
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
          <button className="btn btn-ghost text-4xl"><MdDeleteForever /></button>
        </th>
      </tr>)
      }
     
  
     
    
    </tbody>
   
 
  </table>
</div>
        </div>
    );
};

export default Cart;