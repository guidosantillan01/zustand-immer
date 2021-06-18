import React from "react";

import Badge from "./Badge";
import useStore from "./store/useStore";

function Filter() {
  const timeframeFilters = useStore((state) => state.filters.timeframeFilters);

  return timeframeFilters.map((filter, idx) => (
    <Badge key={filter.id + idx}>{filter.value}</Badge>
  ));
}

export default function App() {
  const set = useStore((state) => state.set);

  const handleClickImmer = () =>
    set((state) => {
      state.filters.timeframeFilters.push({
        id: "tf- 3",
        value: "2012 - 2013",
        filter: ["2012", "2013"]
      });
    });

  const removeFilter = () =>
    set((state) => {
      state.filters.timeframeFilters.pop();
    });

  return (
    <div className="main">
      <button onClick={handleClickImmer}>push filter</button>
      <button onClick={removeFilter}>pop filter</button>
      <div className="code">
        <div className="code-container">
          <Filter />
        </div>
      </div>
    </div>
  );
}
