import { useTasks } from "../contexts/TasksContext";
import { useWindowSize } from "../hooks/useWindowSize";

export default function Footer() {
  const { tasks } = useTasks();
  const { width, height } = useWindowSize();

  return (
    <footer className="app-footer">
      <div> Total tasks: <strong>{tasks.length}</strong> </div>
      <div className="window-size">Window: {width} x {height}</div>
    </footer>
  );
}
