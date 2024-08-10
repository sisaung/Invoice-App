import React from "react";
import useRecordStore from "../store/useRecordStore";

const RecordList = ({ record: { id, productName, price, quantity, cost } }) => {
  const { deleteRecord, updateRecord } = useRecordStore();

  const handleDeleteBtn = () => {
    deleteRecord(id);
  };

  const handleAddQuantity = () => {
    updateRecord(id, 1);
  };
  const handleReduceQuantity = () => {
    if (quantity > 1) return updateRecord(id, -1);
  };
  return (
    <>
      <tr className="group bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {id}
        </th>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {productName}
        </th>
        <td className="px-6 py-4 text-end select-none"> {price} </td>
        <td className=" overflow-hidden px-6 py-4  flex gap-3 items-center justify-end">
          <button
            onClick={handleAddQuantity}
            className="group-hover:translate-x-0 duration-500 -translate-x-36 bg-cyan-400 rounded-full text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          <span className="select-none">{quantity}</span>
          <button
            onClick={handleReduceQuantity}
            className="group-hover:translate-x-0 duration-500 translate-x-36 bg-cyan-400 rounded-full text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
        </td>
        <td className="px-6 py-4 text-end select-none"> {cost} </td>
        <td className="px-6 py-4 text-end overflow-hidden">
          <button
            onClick={handleDeleteBtn}
            className="group-hover:translate-x-0 duration-500 translate-x-36"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 stroke-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </td>
      </tr>
    </>
  );
};

export default RecordList;
