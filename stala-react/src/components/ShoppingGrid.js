import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function ShoppingGrid({ products = [] }) {
  return (
    <div>
      {products.map(({ id, image, slug, title, price }) => (
        <Link
          className="text-decoration-none w-lg-25 w-50"
          to={"/shop/product/" + slug}
          key={id}
        >
          <ProductCard
            imageAlt={image.alt}
            title={title}
            price={price}
            image={image.url}
          />
        </Link>
      ))}
    </div>
  );
}

export default ShoppingGrid;
