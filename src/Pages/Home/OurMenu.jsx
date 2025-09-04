import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import PopularMenu from "../../shared/PopularMenu";
import useMenu from "../../hooks/useMenu";
import { Link } from "react-router-dom";


const OurMenu = () => {
    const[menues]=useMenu()
    console.log(menues)
    const popular=menues?.filter(item=>item.category==='popular')
 

    return (
        <div className="mt-10">
           <section>
            <SectionTitle 
            subHeading={'check it out'}
            heading={'from our menu'}
            ></SectionTitle>
            </section> 
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    popular?.map((menu)=><PopularMenu menu={menu} key={menu._id}></PopularMenu>)
                }
            </div>
          <div className="text-center">
          <Link to={'/shop'}><button className="btn btn-outline uppercase  mb-2  border-0 border-b-2">View Full  Menu</button></Link>
          </div>
        </div>
    );
};

export default OurMenu;