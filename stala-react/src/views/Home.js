import Carousel from "../components/Carousel";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import MultiCarousel from "../components/MultiCarousel";
import Card from "../components/Card";
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
        <div className="row ">
          <h2 className="mt-5 fs-4 fw-bold">Departments</h2>
          <div className="col-md-6 col-12 mt-4">
            <Card
              image="https://oldnavy.gap.com/Asset_Archive/ONWeb/content/0020/687/903/assets/210614_66-M2291_W_DP_Sale.jpg"
              title="Women"
              url="/shop/women/categories"
              position="50% 0%"
            />
          </div>

          <div className="col-md-6 col-12 mt-4">
            <Card
              image="https://oldnavy.gap.com/Asset_Archive/ONWeb/content/0020/640/989/assets/210614_65-M2305_M_DP_Sale.jpg"
              title="Men"
              url="/shop/men/categories"
              position="50% 0%"
            />
          </div>

          <div className="col-md-6 col-12">
            <div className="mt-4">
              <Card
                image="https://oldnavy.gap.com/Asset_Archive/ONWeb/content/0020/464/125/assets/210614_64-M2296_B_DP_Sale.jpg"
                title="Boys"
                url="/shop/boys/categories"
                position="50% 0%"
              />
            </div>
          </div>

          <div className="col-md-6 col-12">
            <div className="mt-4">
              <Card
                image="https://oldnavy.gap.com/Asset_Archive/ONWeb/content/0020/464/084/assets/210614_64-M2295_G_DP_Sale.jpg"
                title="Girls"
                url="/shop/girls/categories"
                position="50% 0%"
              />
            </div>
          </div>
        </div>
        {/* What's new */}
        <h2 className=" mt-5 mb-3 fs-4">Popular Items</h2>
        <MultiCarousel viewableSlides={4} slides={slides} />
        {/* <TestingCarousel /> */}
        {/* Shop Sale */}
      </div>
    </>
  );
}

export default Home;
