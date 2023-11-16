import React from "react";

const SearchBar = () => {
  return (
    <div className=" sticky top-0 z-10">
      <div className="absolute md:left-[-4rem] left-[-1rem] bg-black md:py-6 py-4 px-8 md:pl-16 mx-auto w-[100vw]">
        <input
          type="search"
          placeholder="Search by name"
          className="w-full px-4 py-2 rounded-lg md:rounded-2xl text-white bg-transparent font-medium text-lg md:text-2xl border-2 border-gray-300 focus:border-3 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
