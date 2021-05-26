import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel product-carousel slide w-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item">
            <Link className="text-decoration-none" to="/">
              <ProductCard
                image="https://oldnavy.gap.com/webcontent/0020/484/551/cn20484551.jpg"
                title="High-Waisted Slouchy Cut-Off Jean Shorts for Women -- 5-inch inseam"
                price="34.99"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link className="text-decoration-none" to="/">
              <ProductCard
                image="https://oldnavy.gap.com/webcontent/0020/484/551/cn20484551.jpg"
                title="High-Waisted Slouchy Cut-Off Jean Shorts for Women -- 5-inch inseam"
                price="34.99"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link className="text-decoration-none" to="/">
              <ProductCard
                image="https://oldnavy.gap.com/webcontent/0020/484/551/cn20484551.jpg"
                title="High-Waisted Slouchy Cut-Off Jean Shorts for Women -- 5-inch inseam"
                price="34.99"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link className="text-decoration-none" to="/">
              <ProductCard
                image="https://oldnavy.gap.com/webcontent/0020/484/551/cn20484551.jpg"
                title="High-Waisted Slouchy Cut-Off Jean Shorts for Women -- 5-inch inseam"
                price="34.99"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link className="text-decoration-none" to="/">
              <ProductCard
                image="https://oldnavy.gap.com/webcontent/0020/484/551/cn20484551.jpg"
                title="High-Waisted Slouchy Cut-Off Jean Shorts for Women -- 5-inch inseam"
                price="34.99"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link className="text-decoration-none" to="/">
              <ProductCard
                image="https://oldnavy.gap.com/webcontent/0020/484/551/cn20484551.jpg"
                title="High-Waisted Slouchy Cut-Off Jean Shorts for Women -- 5-inch inseam"
                price="34.99"
              />
            </Link>
          </div>{" "}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <i className="bi bi-arrow-left-short text-primary display-5"></i>

          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <i className="bi bi-arrow-right-short text-primary display-5"></i>

          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
