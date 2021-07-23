import { useState } from "react";
import { Link } from "react-router-dom";
import { resolveHost } from "../utils/host";

function Carousel({ height = 500, carouselId = "carousel" }) {
  const style = { maxHeight: height };

  let [activeIndex, setActiveIndex] = useState(0);

  //  2.25 x 1
  const slides = [
    {
      id: 4,
      link: "/shop/men?categories=107",
      caption: (
        <div className=" justify-content-center  align-items-center h-100">
          <div className="text-center carousel-box ">
            <small className="text-uppercase fw-bolder mb-2">Introducing</small>
            <p className=" alt-font fs-1 letter-spacing-1 my-2">
              Gym Tees &amp; Shorts
            </p>
            <p className="my-0">
              Performance for the gym. Comfort for everyday life
            </p>
            <p className="my-4 fw-bold">
              Shop Now <i className="bi bi-arrow-right"></i>
            </p>
          </div>
        </div>
      ),
      img: {
        url: "/uploads/stala_image_edb53d3451.jpg",
        alt: "New Styles this season",
      },
    },
    {
      id: 2,
      link: "/shop/women?categories=202",
      caption: (
        <div className="d-flex justify-content-start  align-items-center h-100 ">
          <div className="text-center carousel-box">
            <small className="text-uppercase fw-bolder mb-2">
              Lights. Sun.
            </small>

            <p className=" alt-font fs-1 letter-spacing-1 my-2 ">Summer</p>
            <p className="my-0">
              Breathable fabrics for next-level comfort. It's vacation time.
            </p>
            <p className="my-4 fw-bold">
              Shop Now <i className="bi bi-arrow-right"></i>
            </p>
          </div>
        </div>
      ),
      img: {
        url: "/uploads/womens_5_92d9ca6c43.jpg",
        alt: "Summer 2021",
      },
    },
    {
      id: 3,
      link: "/shop/men?categories=201",
      caption: (
        <div className="d-flex justify-content-start  align-items-center h-100 ">
          <div className="text-center carousel-box">
            <small className="text-uppercase fw-bolder mb-2">Discover</small>

            <p className=" alt-font fs-1 letter-spacing-1 my-2 ">
              2021 Men's Collection
            </p>
            <p className="my-0 ">
              Discover new styles this season. Ultimate Comfort. Limited
              Edition.
            </p>
            <p className="my-4 fw-bold">
              Shop Now <i className="bi bi-arrow-right"></i>
            </p>
          </div>
        </div>
      ),
      img: {
        url: "/uploads/Mens_7db2d19c50.jpg",
        alt: "New Styles this season",
      },
    },

    // https://bonobos-contentful.imgix.net/1zbm708fksg8/1Abf8SuiEN9fXcmcxJyv2L/850e4d7214e146bf9c23dd9ddf19b774/HP-Banner-Wedding-June-Desktop.jpg?w=1920&q=75&auto=format%2Ccompress&fit=clip&cs=srgb
  ];
  const handleClick = (moveForward) => {
    if (moveForward) {
      next();
    } else {
      prev();
    }
  };
  const handleKeyDown = (event) => {
    event.target.parentElement.focus();
    console.log(event.key);
    if (event.key === "ArrowRight") {
      next();
    } else if (event.key === "ArrowLeft") {
      prev();
    } else if (event.key === "Enter") {
      event.target.parentElement.querySelector(".show a").click();
    }
  };

  function next() {
    if (activeIndex < slides.length - 1) setActiveIndex(activeIndex + 1);
    else setActiveIndex(0);
  }

  function prev() {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    else setActiveIndex(slides.length - 1);
  }

  return (
    <div
      id={carouselId}
      className="carousel slide  p-0 "
      data-bs-ride="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="carousel-inner" style={style}>
        {slides.map(({ link, img, id, caption }, i) => {
          return (
            <CarouselSlide
              key={id}
              i={i}
              activeIndex={activeIndex}
              link={link}
              img={img}
              height={height}
              caption={caption}
            />
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={"#" + carouselId}
        data-bs-slide="prev"
        onClick={() => {
          handleClick(false);
        }}
        tabIndex={-1}
      >
        <i className="bi bi-arrow-left-short text-primary fs-2"></i>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={"#" + carouselId}
        data-bs-slide="next"
        onClick={() => {
          handleClick(true);
        }}
        tabIndex={-1}
      >
        <i className="bi bi-arrow-right-short text-primary fs-2"></i>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function CarouselSlide({ i, activeIndex, link, img, height, caption }) {
  return (
    <div
      className={
        "carousel-item animated-fade " + (i === activeIndex ? "show" : "")
      }
    >
      <Link tabIndex={-1} to={link}>
        <img
          src={resolveHost(img.url)}
          className="d-block w-100 overflow-hidden"
          alt={img.alt}
          style={{
            maxHeight: height,
            objectFit: "cover",
            width: "100%",
          }}
        />
        {caption && <div className="carousel-overlay-container">{caption}</div>}
      </Link>
    </div>
  );
}

export default Carousel;

//  img.verticalOffset
// ? {
//     position: "absolute",
//     top: img.verticalOffset,
//     maxHeight: height,
//     objectFit: "cover",
//   }
// :
