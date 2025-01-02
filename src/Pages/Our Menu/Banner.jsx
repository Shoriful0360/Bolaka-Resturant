import menuBg from '../../assets/menu/banner3.jpg'
import Cover from '../../shared/Cover';

const Banner = () => {

    return (
        <div>
            <Cover img={menuBg} title={'our menu'} subtitle={'Would you like to try a dish?'}></Cover>
        </div>
    );
};

export default Banner;