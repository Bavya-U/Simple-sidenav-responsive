// ItemManager.js
import React, { useReducer, useState } from "react";

// Reducer function to manage items
function itemReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "EDIT_ITEM":
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

const ItemManager = () => {
  const [items, dispatch] = useReducer(itemReducer, []);
  const [inputValue, setInputValue] = useState("");
  const [editItem, setEditItem] = useState(null);

  const addItem = () => {
    if (inputValue.trim() === "") return;
    if (editItem) {
      // If editing an existing item
      dispatch({
        type: "EDIT_ITEM",
        payload: { id: editItem, text: inputValue },
      });
      setEditItem(null);
    } else {
      // If adding a new item
      const newItem = { id: Date.now(), text: inputValue };
      dispatch({ type: "ADD_ITEM", payload: newItem });
    }
    setInputValue("");
    window.location.href = "/download";
  };

  // const editSelectedItem = (item) => {
  //   setEditItem(item.id);
  //   setInputValue(item.text);
  // };

  // const deleteItem = (id) => {
  //   dispatch({ type: "DELETE_ITEM", payload: id });
  // };

  return (
    <div>
      <h2 className="text-center">Item Manager</h2>
      <div>
        <input
          type="text"
          className="d-flex justify-content-center"
          placeholder="Enter an item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>{editItem ? "Edit" : "Add"}</button>
      </div>
      {/* <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button onClick={() => editSelectedItem(item)}>Edit</button>{" "}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ItemManager;
