import { 
  Carousel,
  CarouselCaption,
  CarouselItem
} from 'reactstrap';
import { useState } from 'react';
import slideImageOne from '../app/assets/img/purplebg.jpg';
import slideImageTwo from '../app/assets/img/mauvebg.jpg';
import slideImageThree from '../app/assets/img/greenbg.jpg';

 const MainCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='main-carousel'>
      <CarouselItem>
        <img
          className="d-block carousel-img"
          src={slideImageOne}
          alt="First slide"
        />
        <CarouselCaption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block carousel-img"
          src={slideImageTwo}
          alt="Second slide"
        />

        <CarouselCaption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block carousel-img"
          src={slideImageThree}
          alt="Third slide"
        />

        <CarouselCaption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
  )

};

export default MainCarousel; 