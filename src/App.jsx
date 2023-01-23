import { useState } from "react";
import NestedComments from "./nestedComments/NestedComments";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold underline pb-3">
        Maching Coding Questions
      </h1>
      <p className="text-purple-700 text-xl">Nested Comments</p>
      <NestedComments />
    </div>
  );
}

export default App;
