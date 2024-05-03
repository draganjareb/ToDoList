import { create } from "zustand";

export const useClicksStore = create((set) => ({
  tasks: [],

  addNewTasks: (item) => set((state) => ({ tasks: [...state.tasks, item] })),
  removeTasks: (itemId) =>
    set((state) => ({
      tasks: state.tasks.filter((item) => item.id !== itemId),
    })),
  resetTasks: () => set(() => ({ tasks: [] })),
}));
