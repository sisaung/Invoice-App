import { create } from "zustand";

const useRecordStore = create((set) => ({
  records: [
    {
      id: 1,
      productName: "Laptop",
      price: 1200,
      quantity: 1,
      cost: 1200,
    },
    {
      id: 2,
      productName: "Wireless Mouse",
      price: 25,
      quantity: 2,
      cost: 50,
    },
    {
      id: 3,
      productName: "Keyboard",
      price: 45,
      quantity: 1,
      cost: 45,
    },
    {
      id: 4,
      productName: "Monitor",
      price: 200,
      quantity: 2,
      cost: 400,
    },
  ],
  deleteRecord: (id) =>
    set((state) => ({
      records: state.records.filter((record) => record.id !== id),
    })),
  updateRecord: (id, q) =>
    set((state) => ({
      records: state.records.map((record) => {
        if (record.id === id) {
          const newQuantity = record.quantity + q;
          return {
            ...record,
            quantity: newQuantity,
            cost: newQuantity * record.price,
          };
        } else {
          return record;
        }
      }),
    })),
}));

export default useRecordStore;
