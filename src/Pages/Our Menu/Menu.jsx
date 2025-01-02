import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

import useMenu from "../../hooks/useMenu";
import MenuCategories from "../../shared/MenuCategories";
import SectionTitle from "../../component/SectionTitle";
import Cover from "../../shared/Cover";


const Menu = () => {
    const [menues]=useMenu()
    const offered=menues.filter(item=>item.category==='offered')
    const dessert=menues.filter(item=>item.category==='dessert')
    const pizza=menues.filter(item=>item.category==='pizza')
    const soup=menues.filter(item=>item.category==='soup')
    const salad=menues.filter(item=>item.category==='salad')
    
    return (
        <div>
            <Helmet>
                <title>Bolaka | Our Menu</title>
            </Helmet>
           <Banner></Banner> 
          {/* offerd section */}
        <div className="mt-5">
        <SectionTitle heading={'TODAYS OFFER'} subHeading={'Donot miss'}></SectionTitle>
        <MenuCategories menues={offered} title={'offered'} text={'ORDER YOUR FAVOURITE FOOD'}></MenuCategories>
        </div>

        {/* Dessert section */}

        <div className="mt-6">
            <Cover img={dessertImg} title={'dessert'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategories title={'dessert'}   menues={dessert} text={'ORDER YOUR FAVOURITE FOOD'}></MenuCategories>
        </div>

        {/* pizza section */}
        <div className="mt-6">
            <Cover img={pizzaImg} title={'pizza'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategories title={'pizza'}  menues={pizza} text={'ORDER YOUR FAVOURITE FOOD'}></MenuCategories>
        </div>
        {/* salad section */}
        <div className="mt-6">
            <Cover img={saladImg} title={'salad'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategories title={'salad'}  menues={salad} text={'ORDER YOUR FAVOURITE FOOD'}></MenuCategories>
        </div>

        {/* soup section */}
        <div className="mt-6">
            <Cover img={soupImg} title={'soup'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategories title={'soup'}  menues={soup} text={'ORDER YOUR FAVOURITE soup FOOD'}></MenuCategories>
        </div>

          
        </div>
    );
};

export default Menu;