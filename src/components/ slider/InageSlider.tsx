import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InageSlider.css';


const ImageSlider: React.FC = () => {
  const slides = [
    "https://images.pexels.com/photos/705190/coffee-cups-stacked-white-705190.jpeg",
    "https://biplans.ir/wp-content/uploads/2025/04/1-ceramic.webp",
    "https://onyxcompany.ir/assets/top-2-mz1dh84G.jpeg",
    "https://onyxcompany.ir/assets/moarefi02-CPLMm8M4.jpg"
  ];

  return (
    <div className="image-slider-wrapper position-relative">
      <Carousel fade interval={4000} controls indicators>
        {slides.map((src, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 slider-img"
              src={src}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* متن ثابت روی همه اسلایدها */}
      <div className="carousel-fixed-text position-absolute top-50 start-50 translate-middle text-center text-white px-3">
        <h1>مواد اولیه پتروشیمی</h1>
        <p>بیش از ۲۵ سال سابقه درخشان در زمینه واردات، صادرات و تولید.</p>
        <Button variant="btn-custom" className='btn-custom fw-bold m-1' href="#read-more">بیشتر</Button>
        <Button variant="dark" className=' bg-dark' href="#read-more">خدمات</Button>
      </div>
    </div>
  );
};

export default ImageSlider;
