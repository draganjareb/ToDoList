import "../Navigation/Navigation.style.css";
import pencile from "../../assets/pencile.png";
import recycleBin from "../../assets/recycle bin.png";
import { useClicksStore } from "../../store/clicks/clicks.store";

const TasksList = () => {
  const { resetTasks, tasks } = useClicksStore();

  return (
    <div className="tasksListWrapper">
      {tasks.length ? (
        <>
          <div className="tasksListHolder">
            <div className="tasksListText">
              <div className="tasksListLeft">
                <h1>Gotovi taskovi</h1>
                <h2>Nastavi tako!</h2>
              </div>
              <span>1/3</span>
            </div>
            <div className="listTasks">
              {tasks.map((item) => (
                <div className="tasks">
                  <div key={item.id} className="spanAndPText">
                    <span className="span"></span>
                    <h2 className="h2Text">{item.value}</h2>
                  </div>
                  <div className="tasksPictures">
                    <img src={pencile} alt="pencile" />
                    <img
                      src={recycleBin}
                      alt="recycleBin"
                      onClick={() => resetTasks()}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <h2 className="noTasks">No Tasks</h2>
      )}
    </div>
  );
};

export default TasksList;
