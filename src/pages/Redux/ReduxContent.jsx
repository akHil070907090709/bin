import React, { useState } from "react";
import { createStore } from "redux";
import "./styles.scss";
function ReduxContent() {
  const store = createStore((state = initialState, action) => {
    switch (action.type) {
      case "ADD_ENTRY":
        const newState = state.concat({ ...action.payload });
        return newState;
      default:
        return state;
    }
  });
  const state = store.getState();
  const [newEntry, setnewEntry] = useState("");

  const handleAddNewEntry = () => {
    const payload = {
      FullName: newEntry,
    };
    store.dispatch({ type: "ADD_ENTRY", payload });
    store.dispatch({ type: "ADD_ENTRY", payload });
  };

  store.subscribe(() => {
    console.log("newState", store.getState());
  });
  return (
    <div className="redux-content">
      <h1>Redux</h1>
      {state.map((item) => (
        <p key={item.id}>{item.FullName}</p>
      ))}
      <div className="add-entry-section">
        <input
          type="text"
          name=""
          id=""
          value={newEntry}
          onChange={(e) => setnewEntry(e.target.value)}
        />
        <button onClick={handleAddNewEntry} className="btn">
          Add New Value
        </button>
      </div>
    </div>
  );
}

export default ReduxContent;

const initialState = [
  {
    id: 1,
    FullName: "Akhilkumar Boragala",
    Profession: "Software Engineer",
  },
  {
    id: 2,
    FullName: "Karthik Dulam",
    Profession: "Associate Software Engineer",
  },
  {
    id: 3,
    FullName: "Ajay kumar Gajula",
    Profession: "Associate Software Engineer",
  },
];
