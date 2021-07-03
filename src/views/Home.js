import Carousel from "../components/Carousel";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import MultiCarousel from "../components/MultiCarousel";
import TestingCarousel from "../components/Testing";

function Home(props) {
  return (
    <>
      <div className="container">
        {/* Carousel */}
        <Carousel height={800} />
        {/* Shop Kids, Men or Women */}
        <div className="row">
          <div className="col-md-6 col-12">
            <Jumbotron
              height={500}
              className="text-white mt-4"
              title={<h3 className="text-center">Women</h3>}
              image={{
                url: "/uploads/womens_small_73404ea534.jpg",
                opacity: "0.3",
                position: "50% 65%",
              }}
              button={
                <Link to={`/shop/women`} className="btn btn-outline-light  ">
                  Shop All
                </Link>
              }
            />
          </div>

          <div className="col-md-6 col-12">
            <Jumbotron
              height={500}
              className="text-white mt-4"
              title={<h3 className="text-center">Men</h3>}
              image={{
                url: "/uploads/Mens_main_8974b4078a.jpg",
                opacity: "0.3",
                position: "50% 20%",
              }}
              button={
                <Link to={`/shop/men`} className="btn btn-outline-light  ">
                  Shop All
                </Link>
              }
            />
          </div>

          <div className=" col-12">
            {" "}
            <Jumbotron
              height={500}
              className="text-white mt-4"
              title={<h3 className="text-center">Kids</h3>}
              image={{
                url: "/uploads/kids_smal_7b1498330a.jpg",
                opacity: "0.3",
                position: "40% 20%",
              }}
              button={
                <>
                  <Link
                    to={`/shop/men`}
                    className="btn btn-outline-light   mx-2"
                  >
                    Shop Boys
                  </Link>

                  <Link to={`/shop/men`} className="btn btn-outline-light  ">
                    Shop Girls
                  </Link>
                </>
              }
            />
          </div>
        </div>
        {/* What's new */}
        <h2 className="text-center my-5">Popular Items</h2>
        <MultiCarousel className="my-5" />
        {/* <TestingCarousel /> */}
        {/* Shop Sale */}
      </div>
    </>
  );
}

export default Home;
