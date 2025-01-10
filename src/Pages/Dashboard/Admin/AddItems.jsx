import { useForm } from "react-hook-form";
import SectionTitle from "../../../component/SectionTitle";
import { FaUtensils, FaUtensilSpoon } from "react-icons/fa";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";


const AddItems = () => {
  const axiosSecure=useAxiosSecure()

  const axiosPublic=useAxiosPublic()
    const { register, handleSubmit,reset } = useForm()
    const onSubmit = async(data) => {

      const imageFile={image:data.image[0]}
      const res=await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageKey}`,imageFile,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      })

      if(res.data.success){
        // now send menu item data to serversite with imgUrl
        const menuItem={
          name:data.name,
          category:data.category,
          price:parseFloat(data.price),
          recepi:data.recepi,
          image:res.data.data.display_url

        }
        const menuRes=await axiosSecure.post('/menu',menuItem)
        reset()
       if(menuRes.data.insertedId){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Added item",
          showConfirmButton: false,
          timer: 1500
        });
       }
        
      }

       }
    return (
        <div>
       <div className="mt-5">
       <SectionTitle heading={'add an item'} subHeading={"What's new?"}></SectionTitle>
       </div>
       <div>
       <form onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
       <label className="form-control w-full max-w-lg">
  <div className="label">
    <span className="label-text">Name <small className="text-base font-medium">*</small> </span>
 
  </div>
  <input {...register('name',{required:true})} type="text" placeholder="Type here" className="input input-bordered w-full " />

</label>

{/* category & price*/}
     <div className="flex gap-2">
        {/* category */}
     <label className="form-control w-1/2 ">
     <div className="label">
    <span className="label-text">Category <small className="text-base font-medium">*</small> </span>
 
  </div>

     <select
      {...register('category',{required:true})}
       className="select select-bordered w-full">
  <option disabled selected>select category</option>
  <option value={'salad'}>Salad</option>
  <option value={'pizza'}>Pizza</option>
  <option value={'soup'}>Soup</option>
  <option value={'dessert'}>Dessert</option>
  <option value={'offered'}>Offered</option>

</select>
</label>
{/* price */}
<label className="form-control w-1/2 ">
  <div className="label">
    <span className="label-text">Price <small className="text-base font-medium">*</small> </span>
 
  </div>
  <input {...register('price',{required:true})} type="text" placeholder="Type here" className="input input-bordered w-full " />

</label>
     </div>
     {/* descriptin/details */}
     <label className="form-control ">
  <div className="label">
    <span className="label-text">Recepi <small className="text-base font-medium">*</small> </span>
 
  </div>
  <textarea {...register('recepi',{required:true})} className="textarea textarea-bordered w-full h-56" placeholder="Bio"></textarea>

</label>
{/* files */}
<label className="form-control w-full mt-4 max-w-xs">

  <input {...register('image',{required:true})} type="file" className="file-input file-input-bordered w-full max-w-xs" />

</label>

      <button className="btn mt-4 bg-orange-400">Add Item <FaUtensils/> </button>
    </form>
       </div>
        </div>
    );
};

export default AddItems;