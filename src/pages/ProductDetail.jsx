/** @format */

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    getProduct(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          {product.title}
        </h1>
        <p className="text-gray-600 text-sm mb-4 text-center">
          {product.description}
        </p>
        <p className="text-lg font-semibold text-gray-800 text-center mb-4">
          ${product.price}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
