import React, { useState } from "react";
import { PaginationProps } from "../../../../types/home";

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
  const pages = ["01", "02", "03", "04"];
  const pagesButton = pages.map((item: any, index: number) => {
    return (
      <div
        key={index}
        onClick={() => setPage(index)}
        className={`w-20 h-20 cursor-pointer ${
          page === index
            ? "bg-dark text-white"
            : "bg-white text-darkGrey hover:bg-grey "
        } flex justify-center items-center `}
      >
        {item}
      </div>
    );
  });
  return (
    <div className="absolute left-0 ss:left-16 md:left-0 bottom-0 flex font-semibold z-[5]">
      {pagesButton}
    </div>
  );
};

export default Pagination;
