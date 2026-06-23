import { useState } from "react";

const withIteration = (WrappedComponent) => {
  return function EnhancedComponent() {
    const [number, setNumber] = useState("");
    const [color, setColor] = useState("");

    const numbers = [];

for (let i = 1; i <= number; i++) {
  numbers.push(i);
}

    return (
      <>
        <input
          type="number"
          placeholder="Enter Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <WrappedComponent
          numbers={numbers}
          color={color}
        />
      </>
    );
  };
};

export default withIteration;