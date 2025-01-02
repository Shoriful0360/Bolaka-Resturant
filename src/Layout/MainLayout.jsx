import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import Footer from "../Pages/Home/Footer";


const MainLayout = () => {
    return (
        <div>
        <header>
            <Navbar></Navbar>
        </header>
        <div className="min-h-[calc(100vh-360px)]">
            <Outlet></Outlet>
        </div>
        <footer className="mt-6">
            <Footer></Footer>
        </footer>
        </div>
    );
};

export default MainLayout;