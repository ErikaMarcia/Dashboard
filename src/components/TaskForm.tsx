import { useState } from "react";
import { useTasks } from "../contexts/TasksContext";

export default function TaskForm() {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text.trim());
    setText("");
  };

  return (
    <form className="task-form card" onSubmit={handleSubmit}>
      <input
        className="task-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicionar tarefa..."
      />
      <button className="btn add-btn" type="submit">Add</button>
    </form>
  );
}
