import { useParams } from "react-router";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";

function Shop() {
  let { category } = useParams();

  return (
    <>
      <div className="container">
        <h2 className="text-capitalize  text-center my-4"> {category}</h2>
        <div className="d-flex flex-wrap container">
          <div className="col-12 col-lg-2 ">
            <div className="sticky-top">
              <div className="d-flex justify-content-between align-items-center border-top border-bottom py-2">
                <span className="fw-bold">866 Items</span>
                <button className="btn btn-link px-0">Clear Filters</button>
              </div>
              {/* Accordion */}

              <Accordion accordionName="filters" />
            </div>
          </div>
          <div className="col-12 col-lg-10">
            <div className="d-flex flex-wrap container">
              {/* image, imageAlt, title, price, className */}
              <Link
                className="text-decoration-none  w-lg-25 w-50"
                to="/shop/product/shirt"
              >
                <ProductCard
                  imageAlt=""
                  title="Oxford Pattern Shirt Bunstay"
                  price="20.99"
                  image="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
              </Link>
              <Link
                className="text-decoration-none  w-lg-25 w-50"
                to="/shop/product/shirt"
              >
                <ProductCard
                  imageAlt=""
                  title="Oxford Pattern Shirt Bunstay"
                  price="20.99"
                  image="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
              </Link>
              <Link
                className="text-decoration-none  w-lg-25 w-50"
                to="/shop/product/shirt"
              >
                <ProductCard
                  imageAlt=""
                  title="Oxford Pattern Shirt Bunstay"
                  price="20.99"
                  image="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
              </Link>
              <Link
                className="text-decoration-none  w-lg-25 w-50"
                to="/shop/product/shirt"
              >
                <ProductCard
                  imageAlt=""
                  title="Oxford Pattern Shirt Bunstay"
                  price="20.99"
                  image="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
              </Link>
              <Link
                className="text-decoration-none  w-lg-25 w-50"
                to="/shop/product/shirt"
              >
                <ProductCard
                  imageAlt=""
                  title="Oxford Pattern Shirt Bunstay"
                  price="20.99"
                  image="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
              </Link>
              <Link
                className="text-decoration-none  w-lg-25 w-50"
                to="/shop/product/shirt"
              >
                <ProductCard
                  imageAlt=""
                  title="Oxford Pattern Shirt Bunstay"
                  price="20.99"
                  image="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
              </Link>
              <Link
                className="text-decoration-none  w-lg-25 w-50"
                to="/shop/product/shirt"
              >
                <ProductCard
                  imageAlt=""
                  title="Oxford Pattern Shirt Bunstay"
                  price="20.99"
                  image="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
              </Link>
              <Link
                className="text-decoration-none  w-lg-25 w-50"
                to="/shop/product/shirt"
              >
                <ProductCard
                  imageAlt=""
                  title="Oxford Pattern Shirt Bunstay"
                  price="20.99"
                  image="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
              </Link>
              <Link
                className="text-decoration-none  w-lg-25 w-50"
                to="/shop/product/shirt"
              >
                <ProductCard
                  imageAlt=""
                  title="Oxford Pattern Shirt Bunstay"
                  price="20.99"
                  image="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
              </Link>
              <Link
                className="text-decoration-none  w-lg-25 w-50"
                to="/shop/product/shirt"
              >
                <ProductCard
                  imageAlt=""
                  title="Oxford Pattern Shirt Bunstay"
                  price="20.99"
                  image="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
              </Link>
              <Link
                className="text-decoration-none  w-lg-25 w-50"
                to="/shop/product/shirt"
              >
                <ProductCard
                  imageAlt=""
                  title="Oxford Pattern Shirt Bunstay"
                  price="20.99"
                  image="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
