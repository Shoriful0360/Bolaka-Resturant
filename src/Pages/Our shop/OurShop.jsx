import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import shopCover from  '../../assets/shop/banner2.jpg'
import Cover from '../../shared/Cover';
import Category from './Category';

const OurShop = () => {
    const {title}=useParams()
    const location=useLocation()
    const [searchParams]=useSearchParams()
    // const title=searchParams.get('title')
console.log(title)
    return (
        <div>
            {/*banner  */}
            <div>
            <Cover img={shopCover} title={'our shop'} subtitle={'Would you like to try a dish?'}></Cover>
            </div>
            {/* category shop */}
            <div>
                <Category title={title}></Category>
            </div>
        </div>
    );
};

export default OurShop;