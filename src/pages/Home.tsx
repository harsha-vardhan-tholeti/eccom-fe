import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="find-more">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="abab"
          name="MacBook"
          price={4545}
          stock={432}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
