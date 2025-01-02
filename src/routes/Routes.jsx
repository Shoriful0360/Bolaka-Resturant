import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Our Menu/Menu";
import OurShop from "../Pages/Our shop/OurShop";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";


export const router=createBrowserRouter([
{
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
        {
            path:'/shop/:title',
            element:<OurShop></OurShop>
        },
        {
            path:'/shop',
            element:<OurShop></OurShop>
        },
        {}
    ]
},
{
    path:'/login',
    element:<Login></Login>
},
{
    path:'/signUp',
    element:<SignUp></SignUp>
}
])