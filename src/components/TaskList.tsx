import { useTasks } from "../contexts/TasksContext";

export default function TaskList() {
  const { tasks, toggleTask, removeTask } = useTasks();

  return (
    <div className="task-list card">
      {tasks.length === 0 ? (
        <p className="empty">No tasks yet. Add your first task!</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={`task-item ${task.done ? 'done' : ''}`}>
              <span className="task-text">{task.text}</span>
              <div className="task-actions">
                <button className="btn btn-icon" onClick={() => toggleTask(task.id)}>
                  {task.done ? '↺' : '✔'}
                </button>
                <button className="btn btn-icon delete" onClick={() => removeTask(task.id)}>✖</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
