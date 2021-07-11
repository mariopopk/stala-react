import Carousel from "../components/Carousel";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import MultiCarousel from "../components/MultiCarousel";

function Home() {
  const slides = [
    {
      id: 1,
      link: "/a",
      title: "Logo Crewneck T-Shirt",
      price: "15.00",
      img: {
        url: "https://calvinklein.scene7.com/is/image/CalvinKlein/21870249_417_main?wid=563&hei=739&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
        alt: "New Styles this season",
      },
    },
    {
      id: 2,
      link: "/b",
      title: "Striped Polo Shirt",
      price: "25.00",
      img: {
        url: "https://calvinklein.scene7.com/is/image/CalvinKlein/21806436_440_main?wid=856&hei=1127&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
        alt: "New Styles this season",
      },
    },
    {
      id: 3,
      link: "/c",
      title: "Brilliant Crystal Necklace",
      price: "60.00",
      img: {
        url: "https://calvinklein.scene7.com/is/image/CalvinKlein/43018450_000_alternate1?wid=563&hei=739&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
        alt: "New Styles this season",
      },
    },
    {
      id: 4,
      link: "/c",
      title: "V-Neck Short Sleeve Dress",
      price: "45.00",
      img: {
        url: "https://calvinklein.scene7.com/is/image/CalvinKlein/18482296_010_main?wid=856&hei=1127&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
        alt: "New Styles this season",
      },
    },
    {
      id: 5,
      link: "/c",
      title: "Tank Dress",
      price: "12.00",
      img: {
        url: "https://calvinklein.scene7.com/is/image/CalvinKlein/18009036_020_main?wid=856&hei=1127&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
        alt: "New Styles this season",
      },
    },
    {
      id: 6,
      link: "/c",
      title: "Slim Fit Dark Jeans",
      price: "12.00",
      img: {
        url: "https://calvinklein.scene7.com/is/image/CalvinKlein/25509890_890_main?wid=856&hei=1127&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
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
                url: "https://deathtostock.imgix.net/000/003/078/original/DTS_Sunny_Premium_4.jpg?w=1083&h=722&fit=clip&dpr=1&auto=compress&q=75&ixlib=js-2.3.1&s=03928d867df308b94abba74d31da1a70",
                opacity: "0.3",
                position: "70% 65%",
              }}
              button={
                <Link
                  to={`/shop/women/categories`}
                  className="btn btn-outline-light btn-lg "
                >
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
                url: "https://deathtostock.imgix.net/000/003/080/original/DTS_Sunny_Premium_6.jpg?w=1083&h=722&fit=clip&dpr=1&auto=compress&q=75&ixlib=js-2.3.1&s=35f5d7b043dbf13f0ce0c652dcb13c1a",
                opacity: "0.3",
                position: "60% 20%",
              }}
              button={
                <Link
                  to={`/shop/men/categories`}
                  className="btn btn-outline-light btn-lg "
                >
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
                url: "https://deathtostock.imgix.net/000/003/586/original/RCC_-_DTS_HOME_5.jpg?w=1083&h=722&fit=clip&dpr=1&auto=compress&q=75&ixlib=js-2.3.1&s=5f00d8c44f2c9eb2742d9aa75e119ea3",
                opacity: "0.3",
                position: "50% 50%",
              }}
              button={
                <>
                  <Link
                    to={`/shop/boys/categories`}
                    className="btn btn-outline-light btn-lg  mx-2"
                  >
                    Shop Boys
                  </Link>

                  <Link
                    to={`/shop/girls/categories`}
                    className="btn btn-outline-light btn-lg "
                  >
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
