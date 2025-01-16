// src/components/ProductCarousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = ({ images }: { images: string[] }) => (
  <Slider
    dots={true}
    infinite={true}
    speed={500}
    slidesToShow={1}
    slidesToScroll={1}
  >
    {images.map((src, index) => (
      <div key={index}>
        <img
          src={src}
          alt={`Product Image ${index + 1}`}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    ))}
  </Slider>
);

export default ProductCarousel;
