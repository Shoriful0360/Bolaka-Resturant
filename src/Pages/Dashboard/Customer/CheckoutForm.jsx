import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useCards from "../../../hooks/useCards";
import UseAuthContext from "../../../hook/UseAuthContext";
import toast from "react-hot-toast";


const CheckoutForm = () => {
    const[error,setError]=useState()
    const[transactionId,setTransactionId]=useState()
    const [clientSecret,setClientSecret]=useState()
    const stripe=useStripe();
    const elements=useElements()
    const{user}=UseAuthContext()
const axiosSecure=useAxiosSecure()
const[cart,refetch,isLoading]=useCards()

console.log('cart',cart,isLoading)
const totalPrice=cart.reduce((total,item)=>total + item.price,0)

    useEffect(()=>{
if(totalPrice>0){
    axiosSecure.post('/create-payment',{price:totalPrice})
.then(res=>{
    console.log(res.data.clientSecret)
    setClientSecret(res.data.clientSecret)
})
}
    },[axiosSecure,totalPrice])
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(!stripe || !elements){
            return;
        }
        const card=elements.getElement(CardElement)
        if(card===null){
            return
        }

        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log('payment error',error)

            setError(error.message)
        }else{
            console.log('payment success',paymentMethod)
            setError('')
        }

        // confirm payment
        const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    name:user?.displayName,
                    email:user?.email
                }
            }
        })

        if(confirmError){
            console.log('confirmError',confirmError)
        }else{
            console.log('paymentIntents',paymentIntent)
            if(paymentIntent.status ==='succeeded'){
                setTransactionId(paymentIntent.id)

                // now save the payment in database
                const payment={
                    email:user?.email,
                    price:totalPrice,
                    date:new Date(),
                    cartIds:cart?.map(item=>item._id),
                    menuItemIds: cart?.map(item=>item.menuId),
                    transactionId:paymentIntent.id,
                    status:'pending'
                }

                await axiosSecure.post('/payment',payment)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.insertedId){
                        toast.success('Thank you for pay order')
                        refetch()
                    }
                })
            }

        
        }
        
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
           <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
{transactionId && <p className="text-green-600 mt-4">Transaction Id: {transactionId}</p>}

        <button className="btn btn-secondary mt-4 " type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        <p className="text-red-500"> {error}</p>
            </form> 
        </div>
    );
};

export default CheckoutForm;