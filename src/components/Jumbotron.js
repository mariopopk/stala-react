import { resolveHost } from "../utils/host";

function Jumbotron({ title, content, button, image, height, className }) {
  const opacity = image.opacity || "0.50";
  return (
    <div
      className={
        "py-5 d-flex justify-content-center align-items-center flex-column image-cover " +
        className
      }
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})), url('${resolveHost(
          image.url
        )}')`,
        backgroundPosition: image.position,
        height,
      }}
    >
      <div className="">
        <div className={"display-5 text-uppercase"}>{title}</div>
        <div className="mt-3 text-center">
          {content && <p className="mb-4">{content}</p>}

          {button}
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
