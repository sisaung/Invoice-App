import React from "react";
import useRecordStore from "../store/useRecordStore";

const Footer = () => {
  const { toggleDrawer } = useRecordStore();
  const handleDrawer = () => {
    toggleDrawer();
  };
  return (
    <div className="mt-auto flex justify-end gap-5 py-4">
      <button
        onClick={handleDrawer}
        className="active:scale-95  px-5 py-2 rounded-lg shadow-md border border-gray-200"
      >
        Manage Inventory
      </button>
      <button className="px-4 py-2 rounded-lg bg-cyan-500 text-white">
        Print
      </button>
    </div>
  );
};

export default Footer;
