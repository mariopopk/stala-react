import { useParams } from "react-router";
import { resolveHost } from "../utils/host";

function Product() {
  let { slug } = useParams();

  return (
    <>
      <div className="container">
        <span className="text-capitalize my-4"> {slug}</span>
        <div className="row">
          <div className="col-md-8 col-12">
            <img
              src={resolveHost("/uploads/mens_pants_01cab4a9e6.jpg")}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 col-12">
            <h4>Slim-Fit Built-In Flex Everyday Shirt for Men</h4>
            <h4>28.00</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
