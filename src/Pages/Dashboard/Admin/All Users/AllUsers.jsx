import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../../../component/Loading";
import { PiUsersThreeThin } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import Swal from "sweetalert2";
import UseAuthContext from "../../../../hook/UseAuthContext";
import { useNavigate } from "react-router-dom";





const AllUsers = () => {
    const AxiosSecure=useAxiosSecure()
    const{data:users,isLoading,refetch}=useQuery({
        queryKey:['user'],

        queryFn:async()=>{
        
            const result=await AxiosSecure.get(`/users`,{
              headers:{
                authorization:`Bearer ${localStorage.getItem('access_token')}`
            
              }
            }
           
          )
          return result.data || []
          
        
        }
    })


    if(isLoading) return <Loading></Loading>

    // delet user
    const handleDelet=async(id)=>{
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result)=> {
  if (result.isConfirmed) {
    await axios.delete(`${import.meta.env.VITE_URL}/users/${id}`)
refetch()
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});


    }

    // create admin 
    const handelMakeAdmin=async(id)=>{
await AxiosSecure.patch(`/users/admin/${id}`)
.then(res=>{
 
    if(res.data.modifiedCount>0){
        Swal.fire({
            position: "top-ceter",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
    }
})

    }

    return (

   
       <div className="overflow-x-auto mt-10">
  <table className="table bg-orange-400">
    {/* head */}
    <thead >
      <tr className=" py-28">
        <th>
         
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className="bg-white">
        {
            users?.map((user,idx)=><tr key={user._id}>
                  <th>
                 {idx +1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user?.image}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                      
                      </div>
                    </div>
                  </td>
                  <td>
                    {user?.email}
               
                  </td>
       
                 <td >
                    {
                        user?.role?"admin":<button onClick={()=>handelMakeAdmin(user?._id)} className="text-2xl bg-orange-400 text-white btn"> <PiUsersThreeThin /></button>
                    }
             
                   </td>
            
                  <th>
                    <button onClick={()=>handleDelet(user?._id)} className="btn text-2xl bg-red-800 text-white"><MdDelete /></button>
                  </th>
                </tr>)
        }

      
   
    </tbody>
 
  </table>
</div>
    
    );
};

export default AllUsers;