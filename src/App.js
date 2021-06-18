import React from "react";
import create from "zustand";
import produce from "immer";

const useFilterStore = create((set) => ({
  set: (fn) => set(produce(fn)),
  timeframeFilters: [
    {
      id: "tf-1",
      value: "2012 - 2013",
      filter: ["2012", "2013"]
    },
    {
      id: "tf-2",
      value: "2013 - 2014",
      filter: ["2013", "2014"]
    }
  ],
  serviceFilters: [
    {
      id: "s-1",
      value: "DWA",
      filter: "dwa"
    }
  ]
}));

const Badge = ({ children }) => {
  return (
    <div
      style={{
        padding: "8px",
        backgroundColor: "orangered",
        display: "inline-flex",
        marginRight: "16px"
      }}
    >
      {children}
    </div>
  );
};

function Filter() {
  const timeframeFilters = useFilterStore((state) => state.timeframeFilters);

  return timeframeFilters.map((filter, idx) => (
    <Badge key={filter.id + idx}>{filter.value}</Badge>
  ));
}

export default function App() {
  const { set } = useFilterStore();

  const handleClickImmer = () =>
    set((state) => {
      state.timeframeFilters.push({
        id: "tf- 3",
        value: "2012 - 2013",
        filter: ["2012", "2013"]
      });
    });

  const removeFilter = () =>
    set((state) => {
      state.timeframeFilters.pop();
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
