import { resolveHost } from "../utils/host";

function Banner({
  children,
  image,
  height,
  className = "bg-tertiary text-dark",
}) {
  //   const style = image
  //     ? {
  //         backgroundImage: `linear-gradient(rgba(0, 0, 0, ${
  //           image.opacity || "0.50"
  //         }), rgba(0, 0, 0, ${image.opacity || "0.50"})), url('${resolveHost(
  //           image.url
  //         )}')`,
  //         backgroundPosition: image.position,
  //         height,
  //       }
  //     : { height };

  return (
    <div
      className={
        "d-lg-inline-flex justify-content-center flex-row-reverse   " +
        className
      }
    >
      <img
        className="flex-fill image-object "
        style={{
          objectFit: "cover",
          height,
          objectPosition: image.position,
        }}
        src={resolveHost(image.url)}
      />
      <div className=" d-flex flex-column ">{children}</div>
    </div>
  );
}

export default Banner;
