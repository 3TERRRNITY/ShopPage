import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul className="mb-2.5 ">
      {props.items.map((item) => (
        <li key={item.id}>
          <Item info={item} />
          <button
            className="m-2.5 p-2.5 border border-blue-900 rounded hover:opacity-80 shadow hover:translate-y-1"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}