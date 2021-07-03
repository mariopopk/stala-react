import Carousel from "../components/Carousel";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import MultiCarousel from "../components/MultiCarousel";

function Home(props) {
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
        url: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
                    to={`/shop/boys`}
                    className="btn btn-outline-light   mx-2"
                  >
                    Shop Boys
                  </Link>

                  <Link to={`/shop/girls`} className="btn btn-outline-light  ">
                    Shop Girls
                  </Link>
                </>
              }
            />
          </div>
        </div>
        {/* What's new */}
        <h2 className="text-center my-5">Popular Items</h2>
        <MultiCarousel className="my-5" slides={slides} />
        {/* <TestingCarousel /> */}
        {/* Shop Sale */}
      </div>
    </>
  );
}

export default Home;
