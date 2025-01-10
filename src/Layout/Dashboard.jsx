import { Outlet } from "react-router-dom";
import Slide from "../Pages/Dashboard/Slide";


const Dashboard = () => {
    return (
        <div className="flex gap-2">
            <div className="w-64 min-h-screen bg-orange-300">
                <Slide></Slide>
            </div>
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;