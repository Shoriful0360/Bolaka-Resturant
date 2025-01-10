import SectionTitle from "../../../component/SectionTitle";
import {loadStripe} from '@stripe/stripe-js';
import{Elements} from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm";

const stripePromise=loadStripe(import.meta.env.  VITE_STRIPE_KEY)
const Payment = () => {
    return (
        <div>
          <SectionTitle heading={'Payment'} subHeading={" Please Pay to eat"}></SectionTitle>  

          <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
          </Elements>
          </div>
        </div>
    );
};

export default Payment;