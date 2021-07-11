import { useParams } from "react-router";
import { Link } from "react-router-dom";
import MultiCarousel from "../components/MultiCarousel";
import ImagesSnapshot from "../components/ImagesSnapshot";
import Jumbotron from "../components/Jumbotron";
import { categories as dbCategories } from "../utils/data";
import { getDepartmentBySlug } from "../utils/helpers";

function Department() {
  let { department } = useParams();

  const slides = {
    100: [
      {
        id: 1,
        link: "/a",
        title: "Slim Fit Jeans",
        price: "32.00",
        img: {
          url: "https://calvinklein.scene7.com/is/image/CalvinKlein/21876300_402_main?wid=432&hei=570&fmt=jpeg&qlt=90%2C0&op_sharpen=1&resMode=trilin&op_usm=0.8%2C1.0%2C6%2C0&iccEmbed=0",
          alt: "Slim Fit Jeans",
        },
      },
      {
        id: 2,
        link: "/b",
        title: "Gray T-Shirt",
        price: "16.00",
        img: {
          url: "https://calvinklein.scene7.com/is/image/CalvinKlein/21272226_020_alternate1?wid=563&hei=739&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
          alt: "New Styles this season",
        },
      },
      {
        id: 3,
        link: "/c",
        title: "Classic Polo Shirt",
        price: "16.00",
        img: {
          url: "https://calvinklein.scene7.com/is/image/CalvinKlein/21802490_230_main?wid=856&hei=1127&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
          alt: "New Styles this season",
        },
      },
      {
        id: 4,
        link: "/c",
        title: "Slim Fit Dress Pants",
        price: "12.00",
        img: {
          url: "https://calvinklein.scene7.com/is/image/CalvinKlein/25302006_415_main?wid=856&hei=1127&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
          alt: "New Styles this season",
        },
      },
      {
        id: 5,
        link: "/c",
        title: "Soft Washed Crew-Neck Tee",
        price: "12.00",
        img: {
          url: "https://calvinklein.scene7.com/is/image/CalvinKlein/25097820_401_main?wid=432&hei=570&fmt=jpeg&qlt=90%2C0&op_sharpen=1&resMode=trilin&op_usm=0.8%2C1.0%2C6%2C0&iccEmbed=0",
          alt: "New Styles this season",
        },
      },
      {
        id: 6,
        link: "/c",
        title: "Classic Fit Chinos",
        price: "12.00",
        img: {
          url: "https://calvinklein.scene7.com/is/image/CalvinKlein/25402165_064_main?wid=856&hei=1127&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
          alt: "New Styles this season",
        },
      },
    ],
    200: [
      {
        id: 1,
        link: "/a",
        title: "Sleevless Sweater",
        price: "32.00",
        img: {
          url: "https://calvinklein.scene7.com/is/image/CalvinKlein/13400226_258_main?wid=856&hei=1127&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
          alt: "Slim Fit Jeans",
        },
      },
      {
        id: 2,
        link: "/b",
        title: "Button-Down Pocket Tunic",
        price: "16.00",
        img: {
          url: "https://calvinklein.scene7.com/is/image/CalvinKlein/12203111_100_main?wid=856&hei=1127&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
          alt: "New Styles this season",
        },
      },
      {
        id: 3,
        link: "/c",
        title: "V-Neck Top",
        price: "16.00",
        img: {
          url: "https://calvinklein.scene7.com/is/image/CalvinKlein/18008768_100_main?wid=856&hei=1127&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
          alt: "New Styles this season",
        },
      },
      {
        id: 4,
        link: "/c",
        title: "Button Down Shirt",
        price: "32.00",
        img: {
          url: "https://calvinklein.scene7.com/is/image/CalvinKlein/12202059_100_main?wid=856&hei=1127&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
          alt: "New Styles this season",
        },
      },
      {
        id: 5,
        link: "/c",
        title: "Performance T-Shirt",
        price: "32.00",
        img: {
          url: "https://calvinklein.scene7.com/is/image/CalvinKlein/11553951_439_main?wid=856&hei=1127&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
          alt: "New Styles this season",
        },
      },
      {
        id: 6,
        link: "/c",
        title: "Tank Top",
        price: "45.00",
        img: {
          url: "https://calvinklein.scene7.com/is/image/CalvinKlein/12866245_010_main?wid=856&hei=1127&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
          alt: "New Styles this season",
        },
      },
    ],
    300: [
      {
        id: 1,
        link: "/a",
        title: "Swin Trunks for Boys",
        price: "10.00",
        img: {
          url: "https://oldnavy.gap.com/webcontent/0019/721/989/cn19721989.jpg",
          alt: "Slim Fit Jeans",
        },
      },
      {
        id: 2,
        link: "/b",
        title: "Two-Pack Jogger Shorts for Boys",
        price: "16.00",
        img: {
          url: "https://oldnavy.gap.com/webcontent/0020/222/477/cn20222477.jpg",
          alt: "New Styles this season",
        },
      },
      {
        id: 3,
        link: "/c",
        title: "Graphic Short Sleeve for Boys",
        price: "15.00",
        img: {
          url: "https://oldnavy.gap.com/webcontent/0019/802/726/cn19802726.jpg",
          alt: "New Styles this season",
        },
      },
      {
        id: 4,
        link: "/c",
        title: "Soft Tee for Girls",
        price: "32.00",
        img: {
          url: "https://oldnavy.gap.com/webcontent/0020/573/503/cn20573503.jpg",
          alt: "New Styles this season",
        },
      },
      {
        id: 5,
        link: "/c",
        title: "Jean Shorts for Girls",
        price: "32.00",
        img: {
          url: "https://oldnavy.gap.com/webcontent/0020/600/192/cn20600192.jpg",
          alt: "New Styles this season",
        },
      },
      {
        id: 6,
        link: "/c",
        title: "Hem Top for Girls",
        price: "45.00",
        img: {
          url: "https://oldnavy.gap.com/webcontent/0020/318/101/cn20318101.jpg",
          alt: "New Styles this season",
        },
      },
    ],
    400: [
      {
        id: 1,
        link: "/a",
        title: "Swin Trunks for Boys",
        price: "10.00",
        img: {
          url: "https://oldnavy.gap.com/webcontent/0019/721/989/cn19721989.jpg",
          alt: "Slim Fit Jeans",
        },
      },
      {
        id: 2,
        link: "/b",
        title: "Two-Pack Jogger Shorts for Boys",
        price: "16.00",
        img: {
          url: "https://oldnavy.gap.com/webcontent/0020/222/477/cn20222477.jpg",
          alt: "New Styles this season",
        },
      },
      {
        id: 3,
        link: "/c",
        title: "Graphic Short Sleeve for Boys",
        price: "15.00",
        img: {
          url: "https://oldnavy.gap.com/webcontent/0019/802/726/cn19802726.jpg",
          alt: "New Styles this season",
        },
      },
      {
        id: 4,
        link: "/c",
        title: "Soft Tee for Girls",
        price: "32.00",
        img: {
          url: "https://oldnavy.gap.com/webcontent/0020/573/503/cn20573503.jpg",
          alt: "New Styles this season",
        },
      },
      {
        id: 5,
        link: "/c",
        title: "Jean Shorts for Girls",
        price: "32.00",
        img: {
          url: "https://oldnavy.gap.com/webcontent/0020/600/192/cn20600192.jpg",
          alt: "New Styles this season",
        },
      },
      {
        id: 6,
        link: "/c",
        title: "Hem Top for Girls",
        price: "45.00",
        img: {
          url: "https://oldnavy.gap.com/webcontent/0020/318/101/cn20318101.jpg",
          alt: "New Styles this season",
        },
      },
    ],
  };

  const { name, image, catchphrase, subcategories, id } = getDepartmentBySlug(
    department,
    dbCategories[0].subcategories
  );

  return (
    <>
      <Jumbotron
        className="text-white"
        title={<h1>{`Shop for ${name}`}</h1>}
        image={{ url: image.url, position: image.position, opacity: "0.4" }}
        height={700}
        button={
          <Link
            to={`/shop/${department}`}
            className="btn btn-outline-light btn-lead btn-lg "
          >
            Shop All
          </Link>
        }
        content={catchphrase}
        position="center"
      />

      <h3 className="text-center my-5">Categories</h3>
      <div className="d-flex flex-wrap container mt-5">
        {subcategories.map(({ name, id, image }) => {
          return (
            <div key={id} className="col-6 col-md-3">
              <ImagesSnapshot
                href={`/shop/${department}?categories=${id}`}
                image={image.url}
                title={name}
              />
            </div>
          );
        })}
      </div>

      <h3 className="text-center my-5">Our Greatest Hits</h3>
      <div className=" container mt-5">
        <MultiCarousel slides={slides[id]} />
      </div>
    </>
  );
}

export default Department;
