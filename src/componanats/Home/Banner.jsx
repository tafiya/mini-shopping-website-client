import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/image/Banner1.png';
import img2 from '../../assets/image/Banner2.png';
import './Banner.css';


const Banner = () => {
    return (
        <Carousel className="text-center boolean ">
        <div >
            <img src={img1}/>
        
        </div>
        <div >
            <img src={img2}  />
            
        </div>
    
    </Carousel>
    );
};

export default Banner;


