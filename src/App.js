import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const initialState = {
    value: 0,
    name: ""
  };

  const [state, setState] = useState(initialState);
  const { value, name } = state;
  const handleChange = (val) => {
    val === "add"
      ? setState({ ...state, value: value + 1, name: "Increenting..." })
      : setState({ ...state, value: value - 1, name: "Decrementing......" });
  };

  const btnStyle = {
    width: "8rem",
    height: "4rem",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "4px",
    marginRight: "8px",
    cursor: "pointer"
  };
  return (
    <div className="App">
      {name}

      <h1 className={value > 0 ? "positive" : "negative"}>{value}</h1>
      <button
        type="button"
        style={btnStyle}
        onClick={() => handleChange("add")}
      >
        add
      </button>
      <button
        type="button"
        style={btnStyle}
        onClick={() => handleChange("sub")}
      >
        subtract
      </button>
    </div>
  );
}
