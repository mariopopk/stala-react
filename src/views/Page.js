import { useParams } from "react-router";

function Page() {
  let { slug } = useParams();
  return <h1> {slug}</h1>;
}

export default Page;
