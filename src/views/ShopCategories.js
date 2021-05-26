import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import ImagesSnapshot from "../components/ImagesSnapshot";
import Jumbotron from "../components/Jumbotron";

function ShopCategories() {
  let { category } = useParams();

  const categories = {
    men: {
      name: "Men",
      image: {
        url: "/uploads/mens_main_af526ac1a0.jpg",
        position: "50% 40%",
      },
      catchphrase: "New feeling. Discover the latest arrivals.",
      subcategories: [
        {
          id: 11,
          name: "Tops",
          image: {
            url: "/uploads/mens_tops_679aac2a8d.jpg",
          },
        },
        {
          id: 12,
          name: "Shorts",
          image: {
            url: "/uploads/mens_shorts_57e4ea4567.jpg",
          },
        },
        {
          id: 13,
          name: "Jeans",
          image: {
            url: "/uploads/mens_jeans_f8701e5eb3.jpg",
          },
        },
        {
          id: 14,
          name: "Sweatshirts",
          image: {
            url: "/uploads/mens_sweatshirts_edb1a98842.jpg",
          },
        },
        {
          id: 15,
          name: "Socks & Underwear",
          image: {
            url: "/uploads/mens_underwear_039dffa730.jpg",
          },
        },
        {
          id: 16,
          name: "Pants",
          image: {
            url: "/uploads/mens_pants_01cab4a9e6.jpg",
          },
        },

        {
          id: 17,
          name: "Activewear",
          image: {
            url: "/uploads/mens_activewear_5d5d043d1d.jpg",
          },
        },
      ],
    },
    women: {
      name: "Women",
      image: {
        url: "/uploads/womens_main_7513bba8d9.jpg",
        position: "center 50%",
      },
      catchphrase: "New feeling. Discover the latest arrivals.",
      subcategories: [
        {
          id: 101,
          name: "Tops",
          image: {
            url: "/uploads/womens_tops_4941cb2790.jpg",
          },
        },
        {
          id: 102,
          name: "Dresses",
          image: {
            url: "/uploads/womens_dresses_ca4eba7454.jpg",
          },
        },
        {
          id: 103,
          name: "Jeans",
          image: {
            url: "/uploads/womens_jeans_db34d12592.jpg",
          },
        },

        {
          id: 105,
          name: "Shorts",
          image: {
            url: "/uploads/womens_shorts_befafee098.jpg",
          },
        },
        {
          id: 106,
          name: "Pants",
          image: {
            url: "/uploads/womens_pants_607c764558.jpg",
          },
        },

        {
          id: 107,
          name: "Activewear",
          image: {
            url: "/uploads/womens_activewearjpg_709586f5b2.jpg",
          },
        },

        {
          id: 108,
          name: "Shoes",
          image: {
            url: "/uploads/womens_shoes_6569007458.jpg",
          },
        },
      ],
    },
    kids: {
      name: "Kids",
      image: {
        url: "/uploads/kids_main_3d5e929b3f.jpg",
        position: "center 10%",
      },
      catchphrase: "Fun, easy and affordable",
      subcategories: [
        {
          id: 1,
          name: "Tops",
          image: {
            url: "/uploads/mens_tops_679aac2a8d.jpg",
          },
        },
        {
          id: 2,
          name: "Shorts",
          image: {
            url: "/uploads/mens_shorts_57e4ea4567.jpg",
          },
        },
        {
          id: 3,
          name: "Jeans",
          image: {
            url: "/uploads/mens_jeans_f8701e5eb3.jpg",
          },
        },
        {
          id: 4,
          name: "Sweatshirts",
          image: {
            url: "/uploads/mens_sweatshirts_edb1a98842.jpg",
          },
        },
        {
          id: 5,
          name: "Socks & Underwear",
          image: {
            url: "/uploads/mens_underwear_039dffa730.jpg",
          },
        },
        {
          id: 6,
          name: "Pants",
          image: {
            url: "/uploads/mens_pants_01cab4a9e6.jpg",
          },
        },

        {
          id: 7,
          name: "Activewear",
          image: {
            url: "/uploads/mens_activewear_5d5d043d1d.jpg",
          },
        },
      ],
    },
  };

  const { name, image, catchphrase, subcategories } = categories[category];

  return (
    <>
      <Jumbotron
        className="text-white"
        title={`Shop for ${name}`}
        image={image.url}
        imagePosition={image.position}
        height={700}
        button={
          <Link
            to={`/shop/${category}`}
            className="btn btn-outline-light btn-lead"
          >
            Shop All
          </Link>
        }
        content={catchphrase}
        position="center"
      />

      <h3 className="text-center my-5">Categories</h3>
      <div className="d-flex flex-wrap container mt-5">
        {subcategories.map(({ name, id, image }) => {
          return (
            <div key={id} className="col-6 col-md-3">
              <ImagesSnapshot
                href={`/shop/${category}`}
                image={image.url}
                title={name}
              />
            </div>
          );
        })}
      </div>

      <h3 className="text-center my-5">Our Greatest Hits</h3>
      <div className="d-flex flex-wrap container mt-5">
        <Carousel />
      </div>
    </>
  );
}

export default ShopCategories;
