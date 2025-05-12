import React from "react";
import { products } from "./ProductDetails";
import ProductCard from "../../Components/Product/Product"

const ProductList = () => {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;
