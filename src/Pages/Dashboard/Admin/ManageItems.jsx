import { FaRegEdit } from "react-icons/fa";
import SectionTitle from "../../../component/SectionTitle";
import { MdDeleteForever } from "react-icons/md";
import useMenu from "../../../hooks/useMenu";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menues,,refetch]=useMenu()
    const axiosSecure=useAxiosSecure()


    const handleDelet=async(menu)=>{
      
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
             const result= await axiosSecure.delete(`/menu/${menu?._id}`)
          
         
          if(result.data.deletedCount ===0){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${menu?.name} have been deleted`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch()
          }
                
            }
          });
        
    }
    
    return (
        <div>
           <div>
            <SectionTitle heading={'manage all items'} subHeading={"Hurry Up!"}></SectionTitle>
            </div>
             {/*items  */}
             <div>
                <h1>Total items: </h1>
                <div className="overflow-x-auto">
  <table className="table bg-orange-300">
    {/* head */}
    <thead className="text-white uppercase">
      <tr>
        <th>
         
        </th>
        <th>Item Image</th>
        <th>Item name</th>
        <th>price</th>
        <th>Updata</th>
        <th>Delet</th>
      </tr>
    </thead>
    <tbody className="bg-white">
      {/* row 1 */}
      {
        menues?.map((menu,idx)=><tr key={idx}>
        <th>
         {idx+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={menu?.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>
        <td>
       {menu?.name}
     
        </td>
        <td>${menu?.price}</td>
        <th>
   <Link to={`/dashboard/update/${menu?._id}`}><button className="bg-orange-300 text-2xl text-white  btn"><FaRegEdit /></button></Link>
        </th>
        <th>
          <button onClick={()=>handleDelet(menu)} className="btn text-2xl bg-red-600 text-white"><MdDeleteForever /></button>
        </th>
      </tr>)
      }
   
 
   
    </tbody>
  
  </table>
</div>
             </div>
        </div>
    );
};

export default ManageItems;