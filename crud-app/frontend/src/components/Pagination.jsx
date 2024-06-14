import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage, setPage } from "../redux/pageSlice";
const Pagination = () => {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full flex justify-center gap-5 items-center">
      <button
        className="border-2 border-black disabled:bg-gray-400 disabled:opacity-50 rounded-xl px-5  bg-blue-300"
        onClick={() => dispatch(prevPage())}
        disabled={page.number === 0 ? true : false}
      >
        Prev
      </button>

      <span className="flex gap-1">
        <span className="font-bold">{page.number + 1}</span>
      </span>

      <button
        className="border-2 border-black rounded-xl px-5 bg-blue-300 disabled:bg-gray-400 disabled:opacity-50"
        onClick={() => dispatch(nextPage())}
        disabled={page.number === 49 ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
