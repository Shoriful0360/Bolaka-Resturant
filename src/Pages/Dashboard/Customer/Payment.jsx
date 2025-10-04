import SectionTitle from "../../../component/SectionTitle";
import {loadStripe} from '@stripe/stripe-js';
import{Elements} from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";
import Ssl_payment from "../../../component/payment/Ssl_payment";

const stripePromise=loadStripe(import.meta.env.  VITE_STRIPE_KEY)
const Payment = () => {
  const [paymentMethod,setPaymentMethod]=useState('stripe')
 
    return (
        <div>
          <SectionTitle heading={'Payment'} subHeading={" Please Pay to eat"}></SectionTitle>  
        {/* select payment method */}
        <div className="mb-10">
          <select onChange={(e)=>setPaymentMethod(e.target.value)} defaultValue="Select payment method" className="select select-primary">
  <option disabled={true}>Select payment method</option>
  <option value={'ssl'}>SSL-Commerse</option>
  <option value={'stripe'}>Stripe</option>

</select>
        </div>
       {
        paymentMethod==='stripe'&& <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
          </Elements>
          </div>
       }
         
          {/* ssl commerse */}
          {
            paymentMethod==='ssl'&& <Ssl_payment/>
       
          }
        </div>
    );
};

export default Payment;