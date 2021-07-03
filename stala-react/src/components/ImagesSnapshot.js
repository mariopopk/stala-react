import { Link } from "react-router-dom";
import { resolveHost } from "../utils/host";

function ImagesSnapshot({ title, href, image }) {
  return (
    <div className="m-2">
      <Link to={href}>
        <div
          className="image-cover "
          style={{
            backgroundImage: `url('${resolveHost(image)}')`,
            height: 470,
          }}
        ></div>
        <p className="text-center">
          <span className="btn text-uppercase fw-bold">{title}</span>
        </p>
      </Link>
    </div>
  );
}

export default ImagesSnapshot;
