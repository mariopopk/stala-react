import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="container">
      <div className="alert mt-5 border-0">
        <h1 className="text-center">Not Found (404)</h1>
        <p className="mt-4 text-muted text-center">
          Sorry, we can't find the page you are looking for
        </p>
      </div>

      <div className="row">
        <div className="col-md-6 col-12">
          <Jumbotron
            height={500}
            className="text-white mt-4"
            title={<h3 className="text-center">Women</h3>}
            image={{
              url: "https://deathtostock.imgix.net/000/003/078/original/DTS_Sunny_Premium_4.jpg?w=1083&h=722&fit=clip&dpr=1&auto=compress&q=75&ixlib=js-2.3.1&s=03928d867df308b94abba74d31da1a70",
              opacity: "0.3",
              position: "50% 65%",
            }}
            button={
              <Link to={`/shop/women`} className="btn btn-outline-light  ">
                Shop All
              </Link>
            }
          />
        </div>

        <div className="col-md-6 col-12">
          <Jumbotron
            height={500}
            className="text-white mt-4"
            title={<h3 className="text-center">Men</h3>}
            image={{
              url: "https://deathtostock.imgix.net/000/003/080/original/DTS_Sunny_Premium_6.jpg?w=1083&h=722&fit=clip&dpr=1&auto=compress&q=75&ixlib=js-2.3.1&s=35f5d7b043dbf13f0ce0c652dcb13c1a",
              opacity: "0.3",
              position: "50% 20%",
            }}
            button={
              <Link to={`/shop/men`} className="btn btn-outline-light  ">
                Shop All
              </Link>
            }
          />
        </div>

        <div className=" col-12">
          {" "}
          <Jumbotron
            height={500}
            className="text-white mt-4"
            title={<h3 className="text-center">Kids</h3>}
            image={{
              url: "https://deathtostock.imgix.net/000/003/586/original/RCC_-_DTS_HOME_5.jpg?w=1083&h=722&fit=clip&dpr=1&auto=compress&q=75&ixlib=js-2.3.1&s=5f00d8c44f2c9eb2742d9aa75e119ea3",
              opacity: "0.3",
              position: "50% 50%",
            }}
            button={
              <>
                <Link
                  to={`/shop/boys`}
                  className="btn btn-outline-light   mx-2"
                >
                  Shop Boys
                </Link>

                <Link to={`/shop/girls`} className="btn btn-outline-light  ">
                  Shop Girls
                </Link>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
