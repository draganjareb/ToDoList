import "../Navigation/Navigation.style.css";

const CreateTask = () => {
  return (
    <div className="createTaskHolder">
      <h1>Koji je tvoj sledeći korak?</h1>
      <input placeholder="Upiši..." className="inputTag" />
      <button onClick={() => addNewTask()}>Sačuvaj</button>
    </div>
  );
};

export default CreateTask;
