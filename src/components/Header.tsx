import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Header() {
  const { user, logout } = useUser();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="app-header">
      <div className="header-left">
        <h3 className="brand">Dashboard</h3>
        <nav className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
      <div className="header-right">
        <span className="user-name">{user?.name}</span>
        <button className="btn theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button>
        <button className="btn logout-btn" onClick={logout}>Logout</button>
      </div>
    </header>
  );
}
