

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div>
            <div className='*:text-center'>
            <p className='text-[#D99904]'>--{subHeading}--</p> 
            <div className='divider w-56 mt-1 mx-auto'></div>
            <h1 className='text-4xl uppercase'>{heading}</h1>
            <div className='divider w-56 mt-1 mx-auto '></div>
            </div>  
        </div>
    );
};

export default SectionTitle;