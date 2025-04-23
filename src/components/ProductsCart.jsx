/** @format */

import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = React.memo(({ product }) => {
  console.log("Rendering:", product.id);

  const imageUrl =
    product?.images?.length > 0 ? product.images[0] : "/photos-icon.svg";

  return (
    <div className="border p-4 rounded">
      <img
        src={imageUrl}
        alt={product.title || "Product Image"}
        className="w-full h-40 object-cover rounded-md"
        onError={(e) => (e.target.src = "/photos-icon.svg")}
      />
      <h2 className="text-lg font-semibold">
        {product.title || "No Title Available"}
      </h2>
      <p>${product.price || "N/A"}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
});

export default ProductsCard;
