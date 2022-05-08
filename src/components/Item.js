import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div class="m-2.5 py-2 ">
      <div>
        <h2 className = "font-semibold uppercase text-2xl">{info.name}</h2>
        <p className = "font-thin text-sm">{info.desc}</p>
      </div>
      <div class="mb-50 py-5 flex items-center">
        <button
          className="bg-white border rounded px-5 py-1 cursor-pointer transition delay-200 easy-out shadow mx-10 hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="text-base">{total ? total : ""}</h3>
        <button className="bg-white border rounded px-5 py-1 cursor-pointer transition delay-200 easy-out shadow mx-10 hover:opacity-80" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
