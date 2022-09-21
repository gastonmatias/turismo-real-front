import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import vigna1     from  '../../assets/deptos/vigna1.jpg'
import castro1    from  '../../assets/deptos/castro1.jpg'
import corral1    from  '../../assets/deptos/corral1.jpg'
import catchagua1 from  '../../assets/deptos/catchagua1.jpg'

export function CarouselHome() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const deptos = [vigna1, castro1, corral1, catchagua1]

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      
      {
        deptos.map((e,i) => 
          (
          <Carousel.Item key={e}>
            <img
              className="d-block w-100 img-fluid"
              src={e}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Turismo Real</h3>
              <p>Ven a disfrutar un merecido descanso</p>
            </Carousel.Caption>
          </Carousel.Item>
          )
        )
      }

    </Carousel>
  );
}