import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" flex flex-col min-h-screen w-full md:w-[600px] lg:w-[800px] xl:w-[1000px] mx-auto ">
      {children}
    </div>
  );
};

export default Container;
