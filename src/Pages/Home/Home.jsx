import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Featured from "./Featured";
import OurMenu from "./OurMenu";
import Slider from "./Slider";
import TestiMonials from "./TestiMonials";

const Home = () => {
    return (
        <div className="space-y-10">
            <Helmet>
                <title>Bolaka | Home</title>
            </Helmet>
        <Banner></Banner>
        <Slider></Slider>
        <OurMenu></OurMenu>
        <Featured></Featured>
        <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;