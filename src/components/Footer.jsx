import React from "react";
import useRecordStore from "../store/useRecordStore";

const Footer = () => {
  const { toggleDrawer } = useRecordStore();
  const handleDrawer = () => {
    toggleDrawer();
  };
  const handlePrint = () => {
    print();
  };
  return (
    <div className="flex justify-end gap-5 py-4 mt-auto print:hidden">
      <button
        onClick={handleDrawer}
        className="px-5 py-2 border border-gray-200 rounded-lg shadow-md active:scale-95"
      >
        Manage Inventory
      </button>
      <button
        onClick={handlePrint}
        className="px-4 py-2 text-white rounded-lg active:scale-95 active:ring-2 active:ring-cyan-600 bg-cyan-500"
      >
        Print
      </button>
    </div>
  );
};

export default Footer;
