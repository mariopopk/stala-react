import { useState } from "react";
import { Link } from "react-router-dom";
import { resolveHost } from "../utils/host";

function ImagesSnapshot({ title, href, image }) {
  const [fallBackImg, setFallBackImg] = useState();
  return (
    <div className="m-2">
      <Link to={href}>
        {image && (
          <img
            src={resolveHost(image)}
            alt=""
            onError={(e) => {
              console.log("error", e);
            }}
            style={{
              height: 400,
              width: "100%",
              objectFit: "cover",
            }}
          />
        )}
        <p className="text-center">
          <span className="btn text-uppercase fw-bold">{title}</span>
        </p>
      </Link>
    </div>
  );
}

export default ImagesSnapshot;

/* <div
className="image-cover "
style={{
  backgroundImage: `url('${resolveHost(image)}')`,
  height: 470,
}}
></div> */
