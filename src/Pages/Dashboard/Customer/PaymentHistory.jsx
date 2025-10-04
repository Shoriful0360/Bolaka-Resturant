import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../component/SectionTitle";
import UseAuthContext from "../../../hook/UseAuthContext";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { Link } from "react-router-dom";
import Loading from "../../../component/Loading";


const PaymentHistory = () => {
    const {user}=UseAuthContext()
    const axiosSecure=useAxiosSecure()
const {data:paymentHistory=[],isLoading}=useQuery({
    queryKey:['paymentHitory',user?.email],
    enabled:!!user?.email,
    queryFn:async()=>{
        const  {data}=await axiosSecure.get(`/payment_history/${user?.email}`)
        return data
    }
})

if(isLoading) return <Loading></Loading>


    return (
        <div>
        <div>
        <SectionTitle heading={'payment history'} subHeading={'At a Glancel'}></SectionTitle>
        </div>
       <div className="">
       <h1 className="text-3xl uppercase font-semibold my-4">Total Payment: ({paymentHistory.length})</h1>
  
       </div>
       {/* table */}
       <div className="overflow-x-auto ">
  <table className="table  ">
    {/* head */}
    <thead className="rouded-md bg-orange-400">
      <tr className="text-base uppercase text-white ">
        <th>
        
        </th>
        <th>Email</th>
        <th>Name</th>
        <th>total price </th>
        <th>payment date</th>
        <th>Transaction id</th>
      </tr>
    </thead>
    <tbody className="text-xl font-semibold">
      {/* row 1 */}
      {
      paymentHistory?.map((item,idx)=> <tr key={idx}>
        <th>
          <label>
           {idx+1}
          </label>
        </th>
        <td>
         {item.email}
        </td>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td>{item.date}</td>
     <td>{item.transactionId}</td>
      </tr>)
      }
     
  
     
    
    </tbody>
   
 
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;