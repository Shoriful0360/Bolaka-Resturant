

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="my-10">
            <div className='*:text-center'>
            <p className='text-[#D99904]'>--{subHeading}--</p> 
            <div className='divider w-56 mt-1 mx-auto'></div>
            <h1 className='text-4xl uppercase italic font-mono word underline underline-offset-8 decoration-orange-400 -tracking-wider'>{heading}</h1>
            
            </div>  
        </div>
    );
};

export default SectionTitle;