import React, { useRef } from "react";
import useRecordStore from "../store/useRecordStore";

const CreateProductform = () => {
  const addProductRef = useRef();
  const addPriceRef = useRef();

  const { products, addProduct } = useRecordStore();

  const handleAddItem = () => {
    const price = parseFloat(addPriceRef.current.value).toFixed(2);
    if (addProductRef.current.value && addPriceRef.current.value > 0) {
      const newProduct = {
        id: products.length + 1,
        name: addProductRef.current.value,
        price: price,
      };
      addProduct(newProduct);
      addProductRef.current.value = "";
      addPriceRef.current.value = "";
    }
  };

  return (
    <div className="grid grid-cols-2 gap-5 py-5 mt-auto">
      <div className="col-span-2 space-y-2">
        <h2 className="font-mono text-lg text-gray-500">Add New Product</h2>
        <input
          type="text"
          ref={addProductRef}
          className="w-full py-2 border border-gray-300 rounded-lg ps-5 outline-cyan-500"
        />
      </div>
      <div className="col-span-1 space-y-2">
        <h2 className="font-mono text-lg text-gray-500 text-nowrap">
          Add Price
        </h2>
        <input
          type="number"
          ref={addPriceRef}
          className="w-full py-2 border border-gray-300 rounded-lg ps-5 outline-cyan-500"
        />
      </div>
      <div className="flex flex-col col-span-1">
        <button
          onClick={handleAddItem}
          className="px-4 py-2 mt-auto text-white rounded-lg active:scale-95 active:ring-2 active:ring-cyan-600 bg-cyan-500"
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default CreateProductform;
