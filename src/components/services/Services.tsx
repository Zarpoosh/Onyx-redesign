import React from "react";
import "./Services.css";

const Banners: React.FC = () => {
  const images = [
    "https://onyxcompany.ir/assets/IMG_2287-BM3eospK.jpeg",
    "https://onyxcompany.ir/assets/micronize-BAd9P8pn.jpeg",
    "https://onyxcompany.ir/assets/IMG_6523-D5GpIDHD.png",
    "https://onyxcompany.ir/assets/kore-KdTZM4wp.jpeg",
    "https://onyxcompany.ir/assets/top-2-mz1dh84G.jpeg",
    "https://onyxcompany.ir/assets/moarefi02-CPLMm8M4.jpg",
  ];

  const allImages = [...images, ...images];

  return (
    <>
      <section className="banner-section">
        <h2 className="fw-bold text-center mb-4">محصولات و خدمات </h2>
        <div className="banner-row move-right my-5">
          <div className="banner-track">
            {allImages.map((src, i) => (
              <div className="banner-item" key={i}>
                <img src={src} alt={`Banner ${i}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="banner-row move-left my-5">
          <div className="banner-track">
            {allImages.map((src, i) => (
              <a className="banner-item" key={i}>
                <img src={src} alt={`Banner ${i}`} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banners;
