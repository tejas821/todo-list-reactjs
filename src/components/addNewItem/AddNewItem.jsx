import { useState } from "react";
import "./AddNewItem.css";

export default function AddNewItem({ onSubmit }) {
  const [NewItem, SetNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (NewItem === "") return;

    onSubmit({ title: NewItem, id: crypto.randomUUID(), completed: false });

    SetNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            New Item
          </label>
          <input
            className="form-control"
            type="text"
            name="NewItem"
            value={NewItem}
            onChange={(e) => SetNewItem(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
