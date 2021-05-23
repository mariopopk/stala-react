import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

function Shop() {
  let { category } = useParams();

  const categories = {
    men: {
      name: "Men",
      image: {
        url: "/uploads/mens_main_af526ac1a0.jpg",
        position: "center 55%",
      },

      catchphrase: "New feeling. Discover the latest arrivals.",
    },
    women: {
      name: "Women",
      image: {
        url: "/uploads/womens_main_7513bba8d9.jpg",
        position: "center 0%",
      },
      catchphrase: "New feeling. Discover the latest arrivals.",
    },
    kids: {
      name: "Kids",
      image: {
        url: "/uploads/kids_main_3d5e929b3f.jpg",
        position: "center 10%",
      },
      catchphrase: "New feeling. Discover the latest arrivals.",
    },
  };

  const { name, image, catchphrase } = categories[category];

  return (
    <Jumbotron
      title={`Shop for ${name}`}
      image={image.url}
      imagePosition={image.position}
      isDark={true}
      height={600}
      button={
        <Link to="/shop/men/new" className="btn btn-outline-light btn-lead">
          New Arrivals
        </Link>
      }
      content={catchphrase}
      position="center"
    />
  );
}

export default Shop;
