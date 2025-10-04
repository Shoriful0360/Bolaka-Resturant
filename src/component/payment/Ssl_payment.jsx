import UseAuthContext from "../../hook/UseAuthContext";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useCards from "../../hooks/useCards";


const Ssl_payment = () => {
    const {user}=UseAuthContext()
    const[cart,refetch,isLoading]=useCards()
const totalPrice=cart.reduce((total,item)=>total + item.price,0)
const axiosSecure=useAxiosSecure()

     const handleCreatePayment=async()=>{

                   const payment={
                    name:user?.displayName,
                     email:user?.email,
                    price:totalPrice,
                    date:new Date(),
                    cartIds:cart?.map(item=>item._id),
                    menuItemIds: cart?.map(item=>item.menuId),
                    category: cart?.map(item=>item.category),                
                    status:'pending'
                   }
                   const response=await axiosSecure.post('/ssl-create-payment',payment)
                   if(response.data?.gatewayUrl){
                    window.location.replace(response?.data?.gatewayUrl)
                   }

                }
    return (
        <div className="mt-10 space-y-3">
          <h1 className="text-xl font-bold">Payment Details :</h1>
          <p>Complete your order by providing your payment details</p>  
       
         <br />
          <button onClick={handleCreatePayment} className="btn btn-info text-white">Next</button>
        </div>
    );
};

export default Ssl_payment;