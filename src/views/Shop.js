import { useParams } from "react-router";

function Shop() {
  let { category } = useParams();

  return (
    <>
      <div className="container">
        <h2 className="text-capitalize  text-center my-4"> {category}</h2>
        <div>
          <div className="col-6 col-md-3">
            <div className="p-1">
              <img src="" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
