import { useState } from "react";
import { Link } from "react-router-dom";
import { resolveHost } from "../utils/host";

function TestingCarousel({ carouselName, viewableSlides = 4, height = 450 }) {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) viewableSlides = 2;

  let [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      id: 1,
      link: "/a",
      title: "Indigo Blue Stonewash Denim Belted Shirt Dress",
      price: "12.00",
      img: {
        url: "https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        alt: "New Styles this season",
      },
    },
    {
      id: 2,
      link: "/b",
      title: "Soft Washed Crew-Neck Tee for Men",
      price: "12.00",
      img: {
        url: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        alt: "New Styles this season",
      },
    },
    {
      id: 3,
      link: "/c",
      title: "Soft Washed Crew-Neck Tee for Men",
      price: "12.00",
      img: {
        url: "https://images.pexels.com/photos/1254502/pexels-photo-1254502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        alt: "New Styles this season",
      },
    },
    {
      id: 4,
      link: "/c",
      title: "Soft Washed Crew-Neck Tee for Men",
      price: "12.00",
      img: {
        url: "https://images.pexels.com/photos/5610951/pexels-photo-5610951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "New Styles this season",
      },
    },
    {
      id: 5,
      link: "/c",
      title: "Soft Washed Crew-Neck Tee for Men",
      price: "12.00",
      img: {
        url: "https://calvinklein.scene7.com/is/image/CalvinKlein/25097820_401_main?wid=432&hei=570&fmt=jpeg&qlt=90%2C0&op_sharpen=1&resMode=trilin&op_usm=0.8%2C1.0%2C6%2C0&iccEmbed=0",
        alt: "New Styles this season",
      },
    },
    {
      id: 6,
      link: "/c",
      title: "Soft Washed Crew-Neck Tee for Men",
      price: "12.00",
      img: {
        url: "https://www4.assets-gap.com/webcontent/0020/624/624/cn20624624.jpg",
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

  const canSlideLeft = activeIndex > 0;
  const canSlideRight = activeIndex < slides.length - viewableSlides;

  function next() {
    if (canSlideRight) setActiveIndex(activeIndex + 1);
  }

  function prev() {
    if (canSlideLeft) setActiveIndex(activeIndex - 1);
  }

  console.log(activeIndex);
  return (
    <div className="carousel ">
      <div className="row  flex-nowrap">
        {slides.map(({ id, link, title, price, img }, i) => {
          return (
            <TestingSlide
              key={id}
              viewableSlides={viewableSlides}
              activeIndex={activeIndex}
              link={link}
              title={title}
              price={price}
              img={img}
              i={i}
              height={height}
            />
          );
        })}
      </div>
      <button
        className={"carousel-control-prev " + (canSlideLeft ? "" : "disabled")}
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
        className={"carousel-control-next " + (canSlideRight ? "" : "disabled")}
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

function TestingSlide({
  link,
  title,
  price,
  img,
  i,
  activeIndex,
  viewableSlides,
  height,
}) {
  const lastSlideInRange = activeIndex + viewableSlides - 1;
  const isSlideViewable = i >= activeIndex && i <= lastSlideInRange;

  function calcSlideWidth(isSlideViewable, viewableSlides) {
    return isSlideViewable ? 100 / viewableSlides + "%" : 0;
  }

  return (
    <div
      style={{ width: calcSlideWidth(isSlideViewable, viewableSlides) }}
      className={"multicarousel-slide " + (isSlideViewable ? "show" : "")}
    >
      <Link className=" text-decoration-none" to={link}>
        <div className="multicarousel-slide-container">
          <img
            src={resolveHost(img.url)}
            alt={img.alt}
            style={{
              height: height,
              objectFit: "cover",
              width: "100%",
            }}
          />
          <div className="">
            <p className="small-title my-2 overflow-hidden text-nowrap text-truncate">
              {title}
            </p>
            <span className="text-muted">{price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TestingCarousel;
