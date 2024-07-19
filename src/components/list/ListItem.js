import React, { useState } from "react";
import { deleteListItem, findEditListItem } from "../../store/listSlice";
import { useDispatch } from "react-redux";

function ListItem({ item }) {
  const [description, setDescription] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="list__item" key={item.id}>
      <div className="list__item-top">
        <span className="list__item-title">{item.title}</span>
        <span className="list__date">{item.data}</span>{" "}
        <button
          className="list__delete"
          onClick={() => {
            dispatch(deleteListItem(item.id));
          }}
        >
          <svg width={24} height={24}>
            <use xlinkHref="./images/icons.svg#delete"></use>
          </svg>
        </button>
        <button
          className="list__edit"
          onClick={() => {
            dispatch(findEditListItem(item.id));
          }}
        >
          <svg width={24} height={24}>
            <use xlinkHref="./images/icons.svg#edit"></use>
          </svg>
        </button>
        <button
          className="list__button-arrow"
          onClick={() => setDescription((ds) => !ds)}
        >
          <svg className="list__item-arrow" width={24} height={24}>
            <use xlinkHref="./images/icons.svg#arrow-bottom"></use>
          </svg>
        </button>
      </div>

      <div
        className="list__item-bottom"
        style={{ maxHeight: description ? 600 : 0 }}
      >
        <p className="list__description">Description: {item.description}</p>
      </div>
    </div>
  );
}

export default ListItem;
