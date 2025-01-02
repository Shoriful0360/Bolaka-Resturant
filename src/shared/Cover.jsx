import { Parallax } from 'react-parallax';


const Cover = ({img,title,subtitle}) => {
    return (
      <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
      
  >
       <div>
          <div
  className="hero h-[600px]"
 >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
      <p className="mb-5 uppercase">
       {subtitle}
      </p>
   
    </div>
  </div>
</div>  
        </div>
  </Parallax>
      
    );
};

export default Cover;