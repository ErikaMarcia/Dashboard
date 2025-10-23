import { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(name, password); 
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit} aria-label="Login form">
        <h1 className="login-title">Login</h1>

        <label className="label">User</label>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="User"
          required
        />

        <label className="label">Passwor</label>
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        <button className="btn-submit" type="submit">Login</button>
      </form>
    </div>
  );
};
