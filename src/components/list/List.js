import React from "react";
import { useSelector } from "react-redux";

import "./list.scss";
import ListItem from "./ListItem";

function List() {
  const list = useSelector((state) => state.list.data);
  return (
    <ul className="list">
      {list.map((item) => {
        return <ListItem item={item} />
      })}
    </ul>
  );
}

export default List;
