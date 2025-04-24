/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../services/api";
import ProductsCard from "../components/ProductsCart";
import { useProducts } from "../context/ProductsContext";

export default function Home() {
  const { category } = useParams();
  const { products, setProducts } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      setIsLoading(true);
      getAllProducts()
        .then((res) => setProducts(res.data))
        .finally(() => setIsLoading(false));
    }
  }, [products, setProducts]);

  useEffect(() => {
    const filteredByCategory = category
      ? products.filter(
          (product) =>
            product?.category?.name?.toLowerCase() === category.toLowerCase()
        )
      : products;

    const filteredBySearch = filteredByCategory.filter((product) =>
      product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filteredBySearch);
  }, [category, searchTerm, products]);

  return (
    <div className="p-4">
      {isLoading && <p className="text-center text-gray-500">Loading...</p>}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((p) => (
          <ProductsCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
