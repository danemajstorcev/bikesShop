
import React, { useState } from "react";
import "./Filter.scss";
import FilterButton from "../FilterButton/FilterButton";
import { ProductType } from "../../App";

interface FilterProps {
  products: ProductType[];
  onFilterChange: (filteredProducts: ProductType[]) => void;
}

const Filter: React.FC<FilterProps> = ({ products, onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState<string>("Show All");

  const handleShowAll = () => {
    setActiveFilter("Show All");
    onFilterChange(products);
  };

  const handleFilterByGender = (gender: string) => {
    setActiveFilter(gender);
    const filteredProducts = products.filter((product) => product.gender === gender);
    onFilterChange(filteredProducts);
  };

  const handleFilterByBrand = (brand: string) => {
    setActiveFilter(brand);
    const filteredProducts = products.filter((product) => product.brand === brand);
    onFilterChange(filteredProducts);
  };

  return (
    <div className="filter">
      <h2>Filter by:</h2>
      <FilterButton
        btnName="Show All"
        isActive={activeFilter === "Show All"}
        bikesCount={products.length}
        onClick={handleShowAll}
        setActive={() => setActiveFilter("Show All")}
      />
      <hr className="filter-hr" />
      <h2>Gender</h2>
      <FilterButton
        btnName="Male"
        isActive={activeFilter === "MALE"}
        bikesCount={products.filter((product) => product.gender === "MALE").length}
        onClick={() => handleFilterByGender("MALE")}
        setActive={() => setActiveFilter("MALE")}
      />
      <FilterButton
        btnName="Female"
        isActive={activeFilter === "FEMALE"}
        bikesCount={products.filter((product) => product.gender === "FEMALE").length}
        onClick={() => handleFilterByGender("FEMALE")}
        setActive={() => setActiveFilter("FEMALE")}
      />
      <hr className="filter-hr" />
      <h2>Brand</h2>
      <FilterButton
        btnName="LE GRAND BIKES"
        isActive={activeFilter === "LE GRAND BIKES"}
        bikesCount={products.filter((product) => product.brand === "LE GRAND BIKES").length}
        onClick={() => handleFilterByBrand("LE GRAND BIKES")}
        setActive={() => setActiveFilter("LE GRAND BIKES")}
      />
      <FilterButton
        btnName="KROSS"
        isActive={activeFilter === "KROSS"}
        bikesCount={products.filter((product) => product.brand === "KROSS").length}
        onClick={() => handleFilterByBrand("KROSS")}
        setActive={() => setActiveFilter("KROSS")}
      />
      <FilterButton
        btnName="EXPLORER"
        isActive={activeFilter === "EXPLORER"}
        bikesCount={products.filter((product) => product.brand === "EXPLORER").length}
        onClick={() => handleFilterByBrand("EXPLORER")}
        setActive={() => setActiveFilter("EXPLORER")}
      />
      <FilterButton
        btnName="VISITOR"
        isActive={activeFilter === "VISITOR"}
        bikesCount={products.filter((product) => product.brand === "VISITOR").length}
        onClick={() => handleFilterByBrand("VISITOR")}
        setActive={() => setActiveFilter("VISITOR")}
      />
      <FilterButton
        btnName="PONY"
        isActive={activeFilter === "PONY"}
        bikesCount={products.filter((product) => product.brand === "PONY").length}
        onClick={() => handleFilterByBrand("PONY")}
        setActive={() => setActiveFilter("PONY")}
      />
      <FilterButton
        btnName="FORCE"
        isActive={activeFilter === "FORCE"}
        bikesCount={products.filter((product) => product.brand === "FORCE").length}
        onClick={() => handleFilterByBrand("FORCE")}
        setActive={() => setActiveFilter("FORCE")}
      />
      <FilterButton
        btnName="E-BIKES"
        isActive={activeFilter === "E-BIKES"}
        bikesCount={products.filter((product) => product.brand === "E-BIKES").length}
        onClick={() => handleFilterByBrand("E-BIKES")}
        setActive={() => setActiveFilter("E-BIKES")}
      />
      <FilterButton
        btnName="IDEAL"
        isActive={activeFilter === "IDEAL"}
        bikesCount={products.filter((product) => product.brand === "IDEAL").length}
        onClick={() => handleFilterByBrand("IDEAL")}
        setActive={() => setActiveFilter("IDEAL")}
      />
    </div>
  );
};

export default Filter;
