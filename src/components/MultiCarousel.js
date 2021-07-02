import { useState } from "react";
import { Link } from "react-router-dom";
import { resolveHost } from "../utils/host";

function MultiCarousel({ height = 500, carouselName = "carousel", className }) {
  const style = { maxHeight: height };

  let [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      link: "/a",
      title: "Soft Washed Crew-Neck Tee for Men",
      price: "12.00",
      img: {
        url: "https://www4.assets-gap.com/webcontent/0020/624/624/cn20624624.jpg",
        alt: "New Styles this season",
      },
    },
    {
      id: 2,
      link: "/b",
      title: "Soft Washed Crew-Neck Tee for Men",
      price: "12.00",
      img: {
        url: "https://www4.assets-gap.com/webcontent/0020/624/624/cn20624624.jpg",
        alt: "New Styles this season",
      },
    },
    {
      id: 3,
      link: "/c",
      title: "Soft Washed Crew-Neck Tee for Men",
      price: "12.00",
      img: {
        url: "https://www4.assets-gap.com/webcontent/0020/624/624/cn20624624.jpg",
        alt: "New Styles this season",
      },
    },
    {
      id: 4,
      link: "/c",
      title: "Soft Washed Crew-Neck Tee for Men",
      price: "12.00",
      img: {
        url: "https://www4.assets-gap.com/webcontent/0020/624/624/cn20624624.jpg",
        alt: "New Styles this season",
      },
    },
    {
      id: 5,
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
      className={"carousel slide  p-0 " + className}
      data-bs-ride="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className=" d-flex justify-content-between w-100" style={style}>
        {slides.map(({ link, img, id, title, price }, i) => {
          return (
            <CarouselSlide
              key={id}
              i={i}
              activeIndex={activeIndex}
              link={link}
              img={img}
              title={title}
              price={price}
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

function CarouselSlide({ i, activeIndex, link, img, height, title, price }) {
  return (
    <div
      style={{ width: "18%" }}
      className={
        "multicarousel-slide " + (i === activeIndex ? "someclass" : "")
      }
    >
      <Link className="text-decoration-none" tabIndex={-1} to={link}>
        <img
          src={resolveHost(img.url)}
          className="img-fluid "
          alt={img.alt}
          style={{
            maxHeight: height,
            objectFit: "cover",
            width: "100%",
          }}
        />
        <div>
          <p className="small-title my-2">{title}</p>
          <span className="text-muted">{price}</span>
        </div>
      </Link>
    </div>
  );
}

export default MultiCarousel;
