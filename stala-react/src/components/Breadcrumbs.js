import { Link } from "react-router-dom";

function Breadcrumbs({ links = [] }) {
  return (
    <div style={{ fontSize: "0.9rem" }}>
      {links.map(({ name, link }, i) => {
        const isLast = i === links.length - 1;
        return (
          <span key={name}>
            {!isLast ? (
              <>
                <Link
                  className="text-muted text-decoration-none text-capitalize"
                  to={link}
                >
                  {name}
                </Link>
                <span className="mx-1">/</span>
              </>
            ) : (
              <span className="text-capitalize">{name}</span>
            )}
          </span>
        );
      })}

      {/* <Link className="text-muted text-decoration-none" to="/">
        Men
      </Link>
      <span className="mx-1">/</span> */}
      {/* <span>Tops</span> */}
    </div>
  );
}

export default Breadcrumbs;
