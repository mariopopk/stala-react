import { useParams } from "react-router";
// import ProductCard from "../components/ProductCard";
import { Link, useLocation } from "react-router-dom";
// import Accordion from "../components/Accordion";
// import DepartmentOptions from "../components/DepartmentOption";
import queryString from "query-string";
import ShoppingFilters from "../components/ShoppingFilters";
import ShoppingGrid from "../components/ShoppingGrid";

// http://localhost:3000/shop/men?&categories=jeans,tops&priceRange=0,100&sizes=xs,sm&colors=blue,red

function Shop() {
  const { department } = useParams();
  const location = useLocation();
  const { categories, colors, priceRange, sizes } = queryString.parse(
    location.search
  );

  console.log(categories, colors, priceRange, sizes);

  return (
    <>
      <div className="container">
        <h2 className="text-capitalize  text-center my-4">{department}</h2>
        <div className="d-flex flex-wrap container">
          <div className="col-12 col-lg-2 ">
            <div className="sticky-top">
              <ShoppingFilters
                categories={categories}
                colors={colors}
                priceRange={priceRange}
                sizes={sizes}
                location={location}
                department={department}
              />
            </div>
          </div>
          <div className="col-12 col-lg-10">
            <div className="d-flex flex-wrap container">
              <ShoppingGrid />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;

// const catalog = {
//   men: [
//     {
//       id: 1,
//       image: {
//         url: "https://calvinklein.scene7.com/is/image/CalvinKlein/21876300_100_main?wid=453&hei=596&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
//         alt: "",
//       },
//       slug: "regular-crewneck",
//       title: "Regular Crewneck",
//       price: 10.99,
//     },

//     {
//       id: 2,
//       image: {
//         url: "https://calvinklein.scene7.com/is/image/CalvinKlein/21804431_100_main?wid=453&hei=596&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
//         alt: "",
//       },
//       slug: "",
//       title: "Regular Polo Shirt",
//       price: 15.99,
//     },

//     {
//       id: 3,
//       image: {
//         url: "https://calvinklein.scene7.com/is/image/CalvinKlein/21890288_540_main?wid=453&hei=596&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
//         alt: "",
//       },
//       slug: "",
//       title: "Tech Shorts",
//       price: 25.99,
//     },
//   ],
//   women: [],
//   girls: [],
//   boys: [],
// };

// const products = catalog[category];

// {/* <div className="container">
// <h2 className="text-capitalize  text-center my-4">{category}</h2>

// <div className="d-flex flex-wrap container">
//   <div className="col-12 col-lg-2 ">
//     <div className="sticky-top">
//       <div className="d-flex justify-content-between align-items-center border-top border-bottom py-2">
//         <span className="fw-bold">{products.length} Items</span>
//         <button className="btn btn-outline-primary btn-sm my-2 ">
//           Clear Filters
//           <span className="mx-2">(1)</span>
//         </button>
//       </div>
//       {/* Accordion */}

//       <Accordion items={accordionItems} accordionName="filters" />
//     </div>
//   </div>
//   <div className="col-12 col-lg-10">
//     <div className="d-flex flex-wrap container">
//       {products.map(({ id, image, slug, title, price }) => (
//         <Link
//           className="text-decoration-none w-lg-25 w-50"
//           to={"/shop/product/" + slug}
//           key={id}
//         >
//           <ProductCard
//             imageAlt={image.alt}
//             title={title}
//             price={price}
//             image={image.url}
//           />
//         </Link>
//       ))}
//     </div>
//   </div>
// </div>
// </div> */}
