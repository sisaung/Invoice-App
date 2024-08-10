import React from "react";

const EmptyRecord = () => {
  return (
    <>
      <tfoot>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td
            scope="row"
            colSpan={6}
            className="text-center px-6 py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white"
          >
            There is no product record,Please Get Something ...
          </td>
        </tr>
      </tfoot>
    </>
  );
};

export default EmptyRecord;
