import "./ContentContainer.scss";
import BikeCard from "../BikeCard/BikeCard";
import { ProductType } from "../../App";
interface ContentContainerProps {
  products: ProductType[];
}
const ContentContainer = ({ products }: ContentContainerProps) => {
  return (
      <div className="content-container">
        {products.map((product) => (
          <BikeCard
            img={`img/${product.image}.png`}
            bikeName={product.name}
            bikePrice={product.price}
          />
        ))}
      </div>
  );
};

export default ContentContainer;
