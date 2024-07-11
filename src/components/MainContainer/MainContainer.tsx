import "./MainContainer.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Bikes from "../Bikes/Bikes";
import { ProductType } from "../../App";
interface MainContainerProps {
  products: ProductType[];
}
const MainContainer = ({ products }: MainContainerProps) => {
  return (
    <div className="main-container">
      <Navbar />
      <hr />
      <h1>Bikes</h1>
      <Bikes products = {products} />
      <Footer />
    </div>
  );
};

export default MainContainer;
