import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function Carousel({img,title, description}) {

  const [index, setIndex] = useState(0);

  const {img,title,} = data

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      
      {
        data.map((e) => {

            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src={e.img}
                alt="slide"
              />

              <Carousel.Caption>
                <h3>{e.title}</h3>
                <p>{e.description}</p>
              </Carousel.Caption>
            </Carousel.Item>           
        })
      }
    
    </Carousel>
  );
}

