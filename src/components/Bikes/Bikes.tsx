import React, { useState } from "react";
import "./Bikes.scss";
import Filter from "../Filter/Filter";
import ContentContainer from "../ContentContainer/ContentContainer";
import { ProductType } from "../../App";

interface BikesProps {
  products: ProductType[];
}

const Bikes: React.FC<BikesProps> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] =
    useState<ProductType[]>(products);

  const handleFilterChange = (filteredProducts: ProductType[]) => {
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="bikes">
      <Filter products={products} onFilterChange={handleFilterChange} />
      <ContentContainer products={filteredProducts} />
    </div>
  );
};

export default Bikes;
