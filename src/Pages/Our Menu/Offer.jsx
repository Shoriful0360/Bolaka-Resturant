import axios from "axios";
import { useEffect, useState } from "react";
import PopularMenu from "../../shared/PopularMenu";
import SectionTitle from "../../component/SectionTitle";


const Offer = () => {
    const [menues,setMenues]=useState([])

    useEffect(()=>{
        axios.get('/menu.json')
        .then(res=>{
           setMenues(res.data)
        })
    },[])
    return (
        <div className="mt-5">
            <SectionTitle heading={'today is offer'} subHeading={"Donot miss"}></SectionTitle>
          <div className="grid grid-cols-2  gap-4 mt-8">
          {
            menues.slice(0,4).map(menu=><PopularMenu key={menu._id} menu={menu}></PopularMenu>)
           } 
          </div>
        </div>
    );
};

export default Offer;