import React from "react";

const Loader = () => {
  return (
    <div className="flex z-[9999999999] justify-center items-center min-h-screen w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#e7e7e3]">
      <div className="animate-spin rounded-full w-28 h-28 border-t-4 border-b-4 border-gray-900"></div>
    </div>
  );
};

export default Loader;
