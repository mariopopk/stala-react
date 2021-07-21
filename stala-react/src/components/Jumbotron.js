import { resolveHost } from "../utils/host";

function Jumbotron({ title, children, button, image, height, className }) {
  const style = image
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${
          image.opacity || "0.50"
        }), rgba(0, 0, 0, ${image.opacity || "0.50"})), url('${resolveHost(
          image.url
        )}')`,
        backgroundPosition: image.position,
        height,
      }
    : { height };

  return (
    <div className={"py-5  image-cover  " + className} style={style}>
      <div className="container d-flex flex-column h-100">{children}</div>
    </div>
  );
}

export default Jumbotron;
