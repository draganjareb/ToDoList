import Button from "../../components/button/Button";
import "./create.style.css";
import useTodoStore from "../../store/todos.store";

const Create = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (event) => {
    event.preventDefault();

    const value = event.target.todo.value;
    const newTodo = {
      title: value,
      id: Math.random().toString(36).substring(7),
      is_completed: false,
    };

    addTodo(newTodo);

    event.target.reset();
  };

  return (
    <div className="create">
      <h1>Koji je tvoj sledeći task?</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="todo">
          <input type="text" name="todo" id="todo" placeholder="Upiši..." />
        </label>
        <Button label="Sačuvaj" />
      </form>
    </div>
  );
};

export default Create;
