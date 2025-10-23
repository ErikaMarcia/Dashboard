import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TasksProvider } from "./contexts/TasksContext";

import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { About } from "./pages/About";
import { PrivateRoute } from "./components/PrivateRoute";

const App = () => (
  <ThemeProvider>
    <UserProvider>
      <TasksProvider>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </TasksProvider>
    </UserProvider>
  </ThemeProvider>
);

export default App;