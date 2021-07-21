import { resolveHost } from "../utils/host";
import PropTypes from "prop-types";

function ProductCard({
  image,
  imageAlt,
  title,
  price,
  className = "",
  category,
}) {
  return (
    <div className={"m-2 " + className}>
      <img src={resolveHost(image)} className="img-fluid" alt={imageAlt} />
      <div className="mt-2">
        <p className="my-1">{price}</p>
        <span className=" letter-spacing-1">{title}</span>
        <p className="my-1 letter-spacing-1 fw-light ">{category}</p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
};

export default ProductCard;
