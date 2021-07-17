import { Link } from "react-router-dom";

function Breadcrumbs({ links = [] }) {
  return (
    <div style={{ fontSize: "0.9rem" }}>
      {links.map((link, i) => {
        const lastIndex = links.length - 1;
        const isLast = i === lastIndex;
        if (isLast) return <LastBreadcrumb key={link.id} name={link.name} />;
        return <Breadcrumb key={link.id} {...link} />;
      })}
    </div>
  );
}

function Breadcrumb({ link, name }) {
  return (
    <>
      <Link
        className="text-muted text-decoration-none text-capitalize"
        to={link}
      >
        {name}
      </Link>
      <span className="mx-1">/</span>
    </>
  );
}

function LastBreadcrumb({ name }) {
  return (
    <>
      <span className="text-capitalize">{name}</span>
    </>
  );
}

export default Breadcrumbs;
