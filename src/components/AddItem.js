import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div className = 'm-2.5'>
        <label htmlFor="item-name">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="m-2.5 py-12px px-10px border rounded border-blue-900 text-base"
        />
      </div>
      <div className = 'm-2.5'>
        <label htmlFor="item-description">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="m-2.5 py-12px px-10px border rounded border-blue-900"
        />
      </div>
      <div className="m-2.5">
        <div className="m-2.5">{props.valid}</div>
        <input type="submit" className="p-2.5 border rounded border-blue-900 shadow hover:opacity-80 hover:cursor-pointer hover:translate-y-1" value="Добавить" />
      </div>
    </form>
  );
}
