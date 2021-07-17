// import { useState } from "react";
import { Link } from "react-router-dom";
import { resolveHost } from "../utils/host";

function CategoryCard({ title, href, image }) {
  return (
    <div className="m-2">
      <Link to={href}>
        {image && (
          <img src={resolveHost(image)} alt="" className="image-snapshot" />
        )}
        <p className="text-center">
          <span className="btn text-uppercase fw-bold">{title}</span>
        </p>
      </Link>
    </div>
  );
}

export default CategoryCard;
