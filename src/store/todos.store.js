import { create } from "zustand"; // pozivamo zustand da bi ovo moglsi poosatviti kao globalni stejt i pozivati ih u komponentama

const useTodoStore = create((set) => ({
  todos: [], //prazan niz
  dialog: {
    isOpen: false,
    item: null,
  }, //koristimo u editu texta sa parametrima false i null

  addTodo: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo] })), // funkcija za dodavanja novog taska

  markTodoCompleted: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, is_completed: !todo.is_completed } : todo
      ),
    })), //funkcija za markiranje taskova - malo pojasniti

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })), // funkcija za brisanje taskova - malo pojasniti

  editTodo: (id, updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      ),
    })), // funkcija za editovanje taskova - malo pojasniti

  setDialog: (isOpen, item) => set({ dialog: { isOpen, item } }), //funkcija unešena nova vrijednost -  malo pojasniti
}));

export default useTodoStore;
