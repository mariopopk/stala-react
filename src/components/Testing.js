import { useState } from "react";
import { Link } from "react-router-dom";
import { resolveHost } from "../utils/host";

function TestingCarousel({ carouselName }) {
  let [activeIndex, setActiveIndex] = useState(0);
  const viewableSlides = 4;
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
    // else setActiveIndex(0);
  }

  function prev() {
    if (canSlideLeft) setActiveIndex(activeIndex - 1);
    // else setActiveIndex(slides.length - 1);
  }

  //   console.log("canSlideRight", canSlideRight);

  console.log(activeIndex);
  return (
    <div className="carousel">
      <div className="row overflow-hidden flex-nowrap">
        {slides.map(({ id, link, title, price, img }, i) => {
          return (
            <div key={id} className="col-lg-3 col-4">
              <TestingSlide
                viewableSlides={viewableSlides}
                activeIndex={activeIndex}
                link={link}
                title={title}
                price={price}
                img={img}
                i={i}
              />
            </div>
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
}) {
  const lastSlideInRange = activeIndex + viewableSlides - 1;
  const isSlideViewable = i >= activeIndex && i <= lastSlideInRange;

  console.log("IsSlideViewable", i, isSlideViewable);

  return (
    <div className={"multicarousel-slide "}>
      <Link className="text-decoration-none" tabIndex={-1} to={link}>
        <img
          src={resolveHost(img.url)}
          className="img-fluid "
          alt={img.alt}
          style={{
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

export default TestingCarousel;
