import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [list, setList] = useState(data);
  const handleClear = () => {
    setList([]);
  };

  console.log(list.length);

  return (
    <main>
      <section>
        <h3 className="container"> {list.length} Birthdays Today</h3>
        <List list={list} />
        <button className="container" onClick={() => handleClear()}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
