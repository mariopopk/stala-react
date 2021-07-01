import { resolveHost } from "../utils/host";
import PropTypes from "prop-types";

function ProductCard({ image, imageAlt, title, price, className }) {
  return (
    <div className={"m-3 " + className}>
      <img src={resolveHost(image)} className="img-fluid" alt={imageAlt} />
      <div className="">
        <p className="small-title my-2">{title}</p>
        <span className="text-muted">{price}</span>
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
