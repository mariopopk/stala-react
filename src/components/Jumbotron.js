import { resolveHost } from "../utils/host";

function Jumbotron({
  title,
  content,
  button,
  image,
  isDark,
  height,
  imagePosition,
}) {
  let fontColor = "";
  if (isDark) fontColor = "text-white";

  return (
    <div
      className={
        "py-5  d-flex justify-content-center align-items-center flex-column image-cover " +
        fontColor
      }
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.5)), url('${resolveHost(
          image
        )}')`,
        backgroundPosition: imagePosition,
        height,
      }}
    >
      <div className="">
        <h1 className="display-5 fw-bold text-uppercase">{title}</h1>
        <div className="mt-3 text-center">
          {content && <p className="mb-4">{content}</p>}

          {button}
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
