import React from "react";
import useRecordStore from "../store/useRecordStore";
import RecordList from "./RecordList";
import EmptyRecord from "./EmptyRecord";

const RecordGroup = () => {
  const { records } = useRecordStore();

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Cost
              </th>

              <th scope="col" className="px-6 py-3">
                <span className="sr-only"></span>
              </th>
            </tr>
          </thead>

          {records.length ? (
            <>
              <tbody>
                {records.map((record, index) => (
                  <RecordList key={record.id} index={index} record={record} />
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-white border-b group dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    colSpan={3}
                    scope="row"
                    className="px-6 py-4 text-lg font-medium text-gray-600 text-end whitespace-nowrap dark:text-white"
                  >
                    Total :
                  </th>
                  <th
                    colSpan={2}
                    scope="row"
                    className="px-6 py-4 text-lg font-medium text-gray-600 text-end whitespace-nowrap dark:text-white"
                  >
                    {records
                      .reduce((acc, record) => acc + record.cost, 0)
                      .toFixed(2)}
                  </th>
                </tr>
              </tfoot>
            </>
          ) : (
            <EmptyRecord />
          )}
        </table>
      </div>
    </div>
  );
};

export default RecordGroup;
