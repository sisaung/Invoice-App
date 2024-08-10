import React from "react";

const InputComponent = ({ refProp, type, ...rest }) => {
  return (
    <>
      <input
        type={type}
        ref={refProp}
        {...rest}
        className="w-full py-2 border border-gray-300 rounded-lg ps-5 outline-cyan-500"
      />
    </>
  );
};

export default InputComponent;
