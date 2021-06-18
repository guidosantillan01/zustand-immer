import React from "react";
import create from "zustand";
import produce from "immer";

const initialState = {
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
};

const useFilterStore = create((set) => ({
  ...initialState,
  addTimeframeFilter: (tf) =>
    set((state) => ({
      ...state,
      timeframeFilters: [...state.timeframeFilters, tf]
    })),
  set: (fn) => set(produce(fn))
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
  console.log({ timeframeFilters });

  return timeframeFilters.map((filter, idx) => (
    <Badge key={filter.id + idx}>{filter.value}</Badge>
  ));
}

export default function App() {
  const { set, addTimeframeFilter } = useFilterStore();

  const handleClickImmer = () =>
    set((state) => {
      state.timeframeFilters.push({
        id: "tf-3",
        value: "2012 - 2013",
        filter: ["2012", "2013"]
      });
    });

  const handleClick = () =>
    addTimeframeFilter({
      id: "tf-3",
      value: "2012 - 2013",
      filter: ["2012", "2013"]
    });

  return (
    <div className="main">
      <button onClick={handleClickImmer}>with immer</button>
      <button onClick={handleClick}>Add more</button>
      <div className="code">
        <div className="code-container">
          <Filter />
        </div>
      </div>
    </div>
  );
}
