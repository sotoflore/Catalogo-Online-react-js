import Carousel from 'react-bootstrap/Carousel';
import BannerOne from '../assets/BannerOne.png';
import BannerTwo from '../assets/BannerTwo.png';
import BannerThree from '../assets/BannerThree.png';
import BannerFour from '../assets/BannerFour.png';

const SliderCarousel = () => {
    return (
        <div className='container section-carousel p-0 rounded-3'>
            <Carousel >
                <Carousel.Item interval={1000}>
                    <img src={BannerOne} className='img-fluid object-fit-cover' alt="banners del catalogo web" />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src={BannerTwo} className='img-fluid object-fit-cover' alt="banners del catalogo web" />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src={BannerThree} className='img-fluid object-fit-cover' alt="banners del catalogo web" />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src={BannerFour} className='img-fluid object-fit-cover' alt="banners del catalogo web" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};
export default SliderCarousel;