import React from "react";

export function Pagination() {
  return (
    <div className="bd-basic__pagination  mb-50 d-flex align-items-center justify-content-center">
      <nav>
        <ul>
          <li>
            <span className="current">1</span>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">
              <i className="fa-regular fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Pagination;
