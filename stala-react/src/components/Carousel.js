import { useState } from "react";
import { Link } from "react-router-dom";
import { resolveHost } from "../utils/host";

function Carousel({ height = 500, carouselName = "carousel" }) {
  const style = { maxHeight: height };

  let [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      link: "/a",
      caption: (
        <div className=" justify-content-end align-items-center h-100">
          <div className="text-center carousel-box ">
            <h4 className="">BACK TO THE OFFICE</h4>
            <p className=" m-0">50% off in selected items</p>
          </div>
        </div>
      ),
      img: {
        url: "/uploads/jumbotron_1_3afefa0344.jpg",
        alt: "New Styles this season",
      },
    },
    {
      id: 2,
      link: "/b",
      caption: (
        <div className=" justify-content-start align-items-center h-100">
          <div className="text-center carousel-box bg-light ">
            <h4 className="text-uppercase">Summer Specials</h4>
            <p className=" m-0">
              Get moving this summer with our brand new styles
            </p>
          </div>
        </div>
      ),
      img: {
        url: "/uploads/womens_summer_banner_3728b64513.jpg",
        alt: "Summer 2021",
      },
    },
    {
      id: 3,
      link: "/c",
      caption: (
        <div className=" justify-content-start  align-items-center h-100">
          <div className="text-center carousel-box ">
            <h4 className="text-uppercase">Sun. Light.</h4>
            <p className=" m-0">50% off in selected items</p>
          </div>
        </div>
      ),
      img: {
        url: "/uploads/women_banner_02_7db5874bf8.jpg",
        alt: "New Styles this season",
      },
    },
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
      id={carouselName}
      className="carousel slide  p-0 mt-1"
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
        data-bs-target={"#" + carouselName}
        data-bs-slide="prev"
        onClick={() => {
          handleClick(false);
        }}
        tabIndex={-1}
      >
        <i className="bi bi-arrow-left-short text-primary display-5"></i>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={"#" + carouselName}
        data-bs-slide="next"
        onClick={() => {
          handleClick(true);
        }}
        tabIndex={-1}
      >
        <i className="bi bi-arrow-right-short text-primary display-5"></i>
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
