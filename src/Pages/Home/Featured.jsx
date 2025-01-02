import SectionTitle from "../../component/SectionTitle";
 import bgImg from '../../assets/home/featured.jpg'
 

const Featured = () => {
    return (
        <div  className="bg-feature-bg bg-cover bg-opacity-55 bg-slate-950 bg-fixed bg-no-repeat bg-blend-darken text-white bg-center py-32 px-40">
           <section>
            <SectionTitle heading={'from our menu'} subHeading={'Should Try'}></SectionTitle>
            </section> 
            <div className="sm:flex justify-center items-center">
              <div className="w-[600px] flex-1">
                <img src={bgImg} alt="" />
              </div>
              <div className="flex-1 sm:ml-10">

                <p>March 20,2023</p>
                <p className="uppercase">Where can i get some</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="btn btn-outline btn-black mt-10 border-0 border-b-2 border-white text-white">Read More</button>
              </div>
            </div>
        </div>
    );
};

export default Featured;