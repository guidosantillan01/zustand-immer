import create from "zustand";
import produce from "immer";

const useStore = create((set) => ({
  set: (fn) => set(produce(fn)),
  filters: {
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
  },
  todos: [
    {
      id: "todo-1",
      todo: "Learn immer"
    },
    {
      id: "todo-2",
      todo: "Learn zustand"
    }
  ],
  user: {
    id: "user-1",
    username: "sputnik3000",
    firstname: "Guido",
    lastname: "Santillan",
    hobbies: ["gaming", "coding", "chilling"]
  }
}));

export default useStore;
