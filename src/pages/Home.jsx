/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../services/api";
import ProductsCard from "../components/ProductsCart";

export default function Home() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data);
      setFilteredProducts(res.data);
    });
  }, []);

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
