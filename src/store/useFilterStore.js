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

export default useFilterStore;
