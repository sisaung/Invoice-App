import React from "react";

const ProductGroup = ({ product: { name, price } }) => {
  return (
    <>
      <div className="text-gray-500 px-4 py-3 border border-l-2 border-l-cyan-500 border-gray-300 rounded-lg flex justify-between items-center">
        <p> {name} </p>
        <p> $ {price} </p>
      </div>
    </>
  );
};

export default ProductGroup;
