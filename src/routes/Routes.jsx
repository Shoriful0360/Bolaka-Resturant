import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Our Menu/Menu";
import OurShop from "../Pages/Our shop/OurShop";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/Admin/All Users/AllUsers";
import AuthPrivate from "../Private Route/AuthPrivate";
import AddItems from "../Pages/Dashboard/Admin/AddItems";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems";
import AdminPrivate from "../Private Route/AdminPrivate";
import UpdateItem from "../Pages/Dashboard/Admin/UpdateItem";
import MyCart from "../Pages/Dashboard/Seller/MyCart";
import Payment from "../Pages/Dashboard/Customer/Payment";
import PaymentHistory from "../Pages/Dashboard/Customer/PaymentHistory";
import UserHome from "../Pages/Dashboard/Customer/UserHome";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
// import MyCart from "../Pages/Dashboard/Admin/Seller/MyCart";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/shop/:title',
                element: <OurShop></OurShop>
            },
            {
                path: '/shop',
                element: <OurShop></OurShop>
            },
            {}
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    },
    {
        path: '/dashboard',
        element: <AuthPrivate><Dashboard></Dashboard></AuthPrivate>,
        children: [
            {
                path:'admin_home',
                element:<AdminPrivate><AdminHome></AdminHome></AdminPrivate>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },

            // admin panal
            // todo:add adminPrivate
            {
                path: 'users',
                element: <AdminPrivate><AllUsers></AllUsers></AdminPrivate>
            },
            // todo:add adminPrivate
            {
                path: 'addItems',
                element: <AdminPrivate><AddItems></AddItems></AdminPrivate>
            },
            {
                path: 'manageItems',
                element: <AdminPrivate><ManageItems></ManageItems></AdminPrivate>
            },
            {
                path: 'update/:id',
                element: <AdminPrivate><UpdateItem></UpdateItem></AdminPrivate>,
                loader: ({ params }) => fetch(`https://bolaka-resturant-server.vercel.app/menu/${params.id}`)
            },


            // customer route
            {
                path:'user_home',
                element:<UserHome></UserHome>
            },
            {
                path: 'my_cart',
                element: <MyCart></MyCart>
            },

            {   
                path:'payment',
                element:<Payment></Payment>
            },
            {
                path:'payment_history',
                element:<PaymentHistory></PaymentHistory>
            }

        ]
    }
])