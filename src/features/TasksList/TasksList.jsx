import "../Navigation/Navigation.style.css";
import pencile from "../../assets/pencile.png";
import recycleBin from "../../assets/recycle bin.png";

const TasksList = () => {
  return (
    <div className="tasksListWrapper">
      <div className="tasksListHolder">
        <div className="tasksListText">
          <div className="tasksListLeft">
            <h1>Gotovi taskovi</h1>
            <h2>Nastavi tako!</h2>
          </div>
          <span>1/3</span>
        </div>
        <div className="listTasks">
          <div className="tasks">
            <div className="spanAndPText">
              <span className="span"></span>
              <h2 className="h2Text">New tasks</h2>
            </div>
            <div className="tasksPictures">
              <img src={pencile} alt="pencile" />
              <img src={recycleBin} alt="recycleBin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksList;
