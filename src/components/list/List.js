import React from "react";
import { useSelector } from "react-redux";

import "./list.scss";

function List() {
  const list = useSelector((state) => state.list);
  return (
    <ul className="list">
      {/* {list.map((item) => {
        return <span>1</span>;
      })} */}
    </ul>
  );
}

export default List;
