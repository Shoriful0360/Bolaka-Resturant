import Swal from "sweetalert2";
import UseAuthContext from "../hook/UseAuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hook/useAxiosSecure";
import toast from "react-hot-toast";
import useCards from "../hooks/useCards";


const FoodCard = ({item}) => {
  const{image,name,recipe,price,_id}=item || {}
  const {user}=UseAuthContext()
  const axiosSecure=useAxiosSecure()
  const[,refetch]=useCards()
  const navigate=useNavigate()
  const location=useLocation()


    const handleAddToCard=async(food)=>{
      if(user && user.email){
        const cartItem={
          menuId:_id,
          email:user?.email,
          name:name,
          price:price,
          img:image
        }
         
     await axiosSecure.post('/myCart',cartItem)
     .then((res)=>{

      if(res.data.insertedId){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${name} added to your card`,
          showConfirmButton: false,
          timer: 1500
        });
        toast.success('success add to cart')
        refetch()
      }

     })
     .catch(()=>{
      toast.error('something is wrong')
     })
       





      }
      else{
        Swal.fire({
          title: "You are not login !",
          text: "Please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
           
            navigate('/login',{state:{from:location}})
          }
        });
      }
    }
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
    <button onClick={()=>handleAddToCard(item)} className="btn group-hover:animate-bounce bg-[#E8E8E8] border-0 border-b-2 hover:text-[#BB8506]  text-[#BB8506] border-[#BB8506] uppercase hover:bg-[#111827]">Add To Card</button>
    
    </div>
  </div>
</div>  
        </div>
    );
};

export default FoodCard;