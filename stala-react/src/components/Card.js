import { Link } from "react-router-dom";
import { resolveHost } from "../utils/host";
function Card({ title, image, url, position = "50% 50%" }) {
  return (
    <>
      <div className="card border-0 position-relative">
        <img
          style={{
            objectFit: "none",
            height: 400,
            width: "100%",
            objectPosition: position,
            filter: "grayscale(15%)",
          }}
          src={resolveHost(image)}
        />
        <div
          className="position-absolute"
          style={{
            inset: 0,
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.0) 100%)",
          }}
        >
          <Link
            className="link-light text-decoration-none   d-flex align-items-end alt-font h-100"
            to={url}
          >
            <div className="fs-2 m-4 ">
              {title}
              <i className="bi bi-arrow-right"></i>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
