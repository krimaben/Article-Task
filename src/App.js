import React from 'react'
import data from "./data.json";
import Article from "./article";

function App() {
  function sortUpVotes(sortBy = "desc") {
    let list = [];
    if (sortBy === "desc")
      list = data.sort((a, b) => parseFloat(b.upVotes) - parseFloat(a.upVotes));
    list = list.filter(
      (el) =>
        (el.upVotes !== null || undefined) &&
        (el.title.trim() !== null || undefined) &&
        (el.date !== null || undefined) &&
        !isNaN(new Date(el.date).getTime())
    );
    return list;
  }
  return (
    <div className="App">
      <Article data={sortUpVotes()} />
    </div>
  );
}

export default App;
