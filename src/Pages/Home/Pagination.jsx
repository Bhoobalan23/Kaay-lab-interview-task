/** **************************** Import Libs ****************************** */
import React from "react";
/** **************************** Import CSS ****************************** */
import "./style.css";

/** **************************** Import Icons ****************************** */
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Pagination({
  nextPage,
  currentPage,
  changeRowsPerPage,
  rowsPerPage,
}) {
  return (
    <div
      className="text-right d-flex justify-content-end align-items-center mt-2"
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: "1rem",
        width: "99%",
      }}
    >
      <form>
        <span>Per Page</span>
        <select
          className="currentpage-totalpage"
          style={{
            marginLeft: "10px",
          }}
          onChange={(e) => {
            changeRowsPerPage(e.target.value);
          }}
          value={rowsPerPage}
        >
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
          <option>200</option>
        </select>
      </form>
      <ul className="mb-0 d-flex align-items-center pl-0">
        <div
          className="currentpage-totalpage d-flex align-items-center"
          style={{ marginRight: "27px" }}
        >
          <span className="page-span">Page</span>
          <li className="currentPage pr-3">{currentPage}</li>
        </div>
        <div className="d-flex">
            <span className="customSpan" onClick={() => nextPage(parseInt(currentPage) - 1)}>
              <AiOutlineLeft />
            </span>
            <span className="customSpan" onClick={() => nextPage(parseInt(currentPage) + 1)}>
              <AiOutlineRight />
            </span>
        </div>
      </ul>
    </div>
  );
}
