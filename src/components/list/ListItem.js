import React, { useState } from "react";

function ListItem({ item }) {
  const [description, setDescription] = useState(false);
  return (
    <div className="list__item">
      <button
        className="list__item-top"
        onClick={() => setDescription((ds) => !ds)}
      >
        <span className="list__item-title">{item.title}</span>
        <span className="list__item-date">{item.data}</span>
        <svg className="list__item-arrow" width={24} height={24}>
          <use xlinkHref="./images/icons.svg#arrow-bottom"></use>
        </svg>
      </button>
      <div
        className="list__bottom"
        style={{ maxHeight: description ? 600 : 0 }}
      >
        <p className="list__description">{item.description}</p>
      </div>
    </div>
  );
}

export default ListItem;
