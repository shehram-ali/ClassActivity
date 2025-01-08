import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  // Initialize the counter state
  const [count, setCount] = useState(0);

  // Handlers to increment and reset the counter
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Counter: {count}</h2> {/* Display the counter value */}
      <Button label="Increment" onClick={increment} /> {/* Increment button */}
      <Button label="Reset" onClick={reset} /> {/* Reset button */}
    </div>
  );
};

export default Counter;
