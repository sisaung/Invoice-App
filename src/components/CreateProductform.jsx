import React, { useRef } from "react";
import useRecordStore from "../store/useRecordStore";

const CreateProductform = () => {
  const addProductRef = useRef();
  const addPriceRef = useRef();

  const { products, addProduct } = useRecordStore();

  const handleAddItem = () => {
    const newProduct = {
      id: products.length + 1,
      name: addProductRef.current.value,
      price: addPriceRef.current.value,
    };
    addProduct(newProduct);
  };

  return (
    <div className="grid grid-cols-2 mt-auto gap-5 py-5">
      <div className="col-span-2 space-y-2">
        <h2 className="text-lg font-mono text-gray-500">Add New Product</h2>
        <input
          type="text"
          ref={addProductRef}
          className="ps-5 w-full py-2 rounded-lg outline-cyan-500 border-gray-300 border"
        />
      </div>
      <div className="col-span-1 space-y-2">
        <h2 className="text-lg text-nowrap font-mono text-gray-500">
          Add Price
        </h2>
        <input
          type="number"
          ref={addPriceRef}
          className="ps-5 w-full py-2 rounded-lg outline-cyan-500 border-gray-300 border"
        />
      </div>
      <div className="col-span-1 flex flex-col">
        <button
          onClick={handleAddItem}
          className="active:scale-95 active:ring-2 active:ring-cyan-600 mt-auto bg-cyan-500 px-4 py-2 rounded-lg text-white"
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default CreateProductform;
