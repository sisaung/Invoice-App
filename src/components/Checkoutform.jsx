import React, { useRef, useState } from "react";

import useRecordStore from "../store/useRecordStore";
import InputComponent from "./InputComponent";

const Checkoutform = () => {
  const { products, records, addRecord, updateRecord } = useRecordStore();
  const [select, setSelect] = useState();
  const numberRef = useRef();

  const handleOnChange = (e) => {
    setSelect(e.target.value);
  };

  const handleBuyBtn = () => {
    const currentProduct = products.find((p) => p.name === select);
    const isExistingRecord = records.find((r) => r.productName === select);

    console.log(isExistingRecord);

    const quantity = parseInt(numberRef.current.value);

    if (select !== undefined && quantity > 0) {
      if (isExistingRecord) {
        console.log("hello");

        updateRecord(isExistingRecord.id, quantity);
      } else {
        const newRecord = {
          id: records.length + 1,
          productName: select,
          price: currentProduct.price,
          quantity: quantity,
          cost: currentProduct?.price * quantity,
        };
        addRecord(newRecord);
      }

      // setSelect("");
      numberRef.current.value = "";
    }
  };

  return (
    <div className="grid grid-cols-5 gap-5 p-5 my-5 mb-5 border border-gray-300 rounded-lg print:hidden">
      <div className="col-span-2">
        <label
          htmlFor="countries"
          className="block mb-2 font-mono text-lg font-bold text-gray-600 dark:text-white"
        >
          Select an option
        </label>
        <select
          id="countries"
          onChange={handleOnChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
        >
          <option value=""> Choose Product </option>
          {products.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div className="col-span-2">
        <label
          htmlFor="number-input"
          className="block mb-2 font-mono text-lg font-bold text-gray-600 dark:text-white"
        >
          Select a number:
        </label>
        <InputComponent type="number" ref={numberRef} placeholder="100" />
      </div>
      <div className="flex flex-col col-span-1">
        <button
          onClick={handleBuyBtn}
          className="px-4 py-3 mt-auto text-white rounded-lg active:scale-95 active:ring-2 active:ring-cyan-600 bg-cyan-500"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Checkoutform;
