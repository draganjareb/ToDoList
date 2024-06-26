import "../todos.style.css";
import useTodoStore from "../../../store/todos.store";

const TODOHero = () => {
  // Calculate completed todos count
  const todos = useTodoStore((state) => state.todos);
  const todos_completed = todos.filter((todo) => todo.is_completed).length; // kada koristimo filter
  const total_todos = todos.length;

  return (
    <section className="todohero_section">
      <div>
        <h2 className="text_large">Gotovi taskovi!</h2>
        <h2 className="text_small">Nastavi tako!</h2>
      </div>
      <div>
        {todos_completed}/{total_todos}
      </div>
    </section>
  );
};

export default TODOHero;
