import { Header } from "../components/Header";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import { Footer } from "../components/Footer";

export const Dashboard = () => (
  <div>
    <Header />
    <TaskForm />
    <TaskList />
    <Footer />
  </div>
);
