
import { useEffect, useState } from "react";
import "./App.scss";
import MainContainer from "./components/MainContainer/MainContainer";

export interface ProductType {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
}

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.products)) {
          console.log("Fetched products:", data.products);
          setProducts(data.products);
          setIsLoading(false);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      {!isLoading && <MainContainer products={products} />}
    </div>
  );
}

export default App;
