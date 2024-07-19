import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

import "./list.scss";

function List() {
  const list = useSelector((state) => state.list.data);

  return (
    <ul className="list">
      {list.map((item) => {
        return <ListItem key={item.id} item={item} />
      })}
    </ul>
  );
}

export default List;
