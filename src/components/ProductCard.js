import { resolveHost } from "../utils/host";

function ProductCard({ image, imageAlt, title, price }) {
  return (
    <div className="m-3">
      <img src={resolveHost(image)} className="img-fluid" alt={imageAlt} />
      <div className="">
        <p className="small-title my-2">{title}</p>
        <span className="text-muted">{price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
