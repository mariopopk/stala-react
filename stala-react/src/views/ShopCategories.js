import { useParams } from "react-router";
import { Link } from "react-router-dom";
import MultiCarousel from "../components/MultiCarousel";
import ImagesSnapshot from "../components/ImagesSnapshot";
import Jumbotron from "../components/Jumbotron";

function ShopCategories() {
  let { category } = useParams();

  const slides = {
    1: [
      {
        id: 1,
        link: "/a",
        title: "Indigo Blue Stonewash Denim Belted Shirt Dress",
        price: "12.00",
        img: {
          url: "https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          alt: "New Styles this season",
        },
      },
      {
        id: 2,
        link: "/b",
        title: "Soft Washed Crew-Neck Tee for Men",
        price: "12.00",
        img: {
          url: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          alt: "New Styles this season",
        },
      },
      {
        id: 3,
        link: "/c",
        title: "Soft Washed Crew-Neck Tee for Men",
        price: "12.00",
        img: {
          url: "https://images.pexels.com/photos/1254502/pexels-photo-1254502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          alt: "New Styles this season",
        },
      },
      {
        id: 4,
        link: "/c",
        title: "Soft Washed Crew-Neck Tee for Men",
        price: "12.00",
        img: {
          url: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          alt: "New Styles this season",
        },
      },
      {
        id: 5,
        link: "/c",
        title: "Soft Washed Crew-Neck Tee for Men",
        price: "12.00",
        img: {
          url: "https://calvinklein.scene7.com/is/image/CalvinKlein/25097820_401_main?wid=432&hei=570&fmt=jpeg&qlt=90%2C0&op_sharpen=1&resMode=trilin&op_usm=0.8%2C1.0%2C6%2C0&iccEmbed=0",
          alt: "New Styles this season",
        },
      },
      {
        id: 6,
        link: "/c",
        title: "Soft Washed Crew-Neck Tee for Men",
        price: "12.00",
        img: {
          url: "https://www4.assets-gap.com/webcontent/0020/624/624/cn20624624.jpg",
          alt: "New Styles this season",
        },
      },
    ],
    2: [],
    3: [],
    4: [],
  };

  const categories = {
    men: {
      id: 1,
      name: "Men",
      image: {
        url: "/uploads/mens_4_fe606847b1.jpg",
        position: "50% 40%",
      },

      catchphrase: "New feeling. Discover the latest arrivals.",
      subcategories: [
        {
          id: 11,
          name: "Tops",
          image: {
            url: "/uploads/mens_11_809000796b.jpg",
          },
        },
        {
          id: 12,
          name: "Shorts",
          image: {
            url: "/uploads/mens_10_f12ad5a52c.jpg",
          },
        },
        {
          id: 13,
          name: "Jeans",
          image: {
            url: "/uploads/mens_2_1eee1265f1.jpg",
          },
        },
        {
          id: 14,
          name: "Sweatshirts",
          image: {
            url: "/uploads/mens_16_4b33090f73.jpg",
          },
        },
        {
          id: 15,
          name: "Socks & Underwear",
          image: {
            url: "/uploads/mens_8_609f9a24f2.jpg",
          },
        },
        {
          id: 16,
          name: "Pants",
          image: {
            url: "/uploads/mens_13_9fce86b21d.jpg",
          },
        },

        {
          id: 17,
          name: "Activewear",
          image: {
            url: "/uploads/mens_16_4b33090f73.jpg",
          },
        },
      ],
    },
    women: {
      id: 2,
      name: "Women",
      image: {
        url: "/uploads/womens_10_c0af8e4089.jpg",
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
      id: 3,
      name: "Kids",
      image: {
        url: "/uploads/kids_main_3d5e929b3f.jpg",
        position: "center 10%",
      },
      catchphrase: "Fun, easy and affordable",
      subcategories: [
        {
          id: 301,
          name: "Boys",
          image: {
            url: "/uploads/boys_main_a91a23cb91.jpg",
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
                url: "/uploads/mens_10_f12ad5a52c.jpg",
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
                url: "/uploads/mens_8_609f9a24f2.jpg",
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
        {
          id: 302,
          name: "Girls",
          image: {
            url: "/uploads/girls_main_47418be260.jpg",
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
      ],
    },
  };

  const { name, image, catchphrase, subcategories, id } = categories[category];

  return (
    <>
      <Jumbotron
        className="text-white"
        title={<h1>{`Shop for ${name}`}</h1>}
        image={{ url: image.url, position: image.position, opacity: "0.4" }}
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
                href={`/shop/${category}?filter=${name}`}
                image={image.url}
                title={name}
              />
            </div>
          );
        })}
      </div>

      <h3 className="text-center my-5">Our Greatest Hits</h3>
      <div className=" container mt-5">
        <MultiCarousel slides={slides[id]} />
      </div>
    </>
  );
}

export default ShopCategories;
